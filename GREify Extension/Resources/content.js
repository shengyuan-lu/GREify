// content.js - Script that runs on web pages to replace words
(function() {
  // Extension state variables
  let isActive = false;
  let replacementPercentage = 25; // Default replacement percentage
  let wordsReplacedCount = 0;
  
  // Check saved state when content script loads
  const storageAPI = getStorageAPI();
  storageAPI.get(['greVocabActive', 'replacementPercentage'], function(result) {
    isActive = result.greVocabActive !== undefined ? result.greVocabActive : false;
    replacementPercentage = result.replacementPercentage || 25;
    
    if (isActive) {
      processPage();
      // Send word count to background script
      getRuntimeAPI().sendMessage({
        action: "updateWordCount",
        count: wordsReplacedCount
      });
    }
  });
  
  // Listen for messages from popup/background
  getRuntimeAPI().onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleState") {
      isActive = request.active;
      
      if (isActive) {
        wordsReplacedCount = 0;
        processPage();
        sendResponse({status: "success", wordsReplaced: wordsReplacedCount});
      } else {
        // Reset replaced words
        location.reload();
        sendResponse({status: "success", wordsReplaced: 0});
      }
    } else if (request.action === "updatePercentage") {
      replacementPercentage = request.percentage;
      sendResponse({status: "success"});
      
      if (isActive) {
        location.reload(); // Reload to apply new percentage
      }
    } else if (request.action === "getWordCount") {
      sendResponse({count: wordsReplacedCount});
    }
    return true;
  });
  
  function processPage() {
    // Skip certain pages where replacement might break functionality
    if (window.location.href.includes("google.com/search") ||
        window.location.href.includes("facebook.com") ||
        window.location.href.includes("twitter.com")) {
      return;
    }
    
    // Create replacement mapping
    const replacementMap = {};
    Object.keys(greVocabulary).forEach(greWord => {
      greVocabulary[greWord].replaces.forEach(commonWord => {
        replacementMap[commonWord.toLowerCase()] = greWord;
      });
    });
    
    // Traverse text nodes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Skip script and style tags
          if (node.parentNode.tagName === 'SCRIPT' ||
              node.parentNode.tagName === 'STYLE' ||
              node.parentNode.className === 'gre-popup') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      },
      false
    );
    
    const textNodes = [];
    let currentNode;
    while (currentNode = walker.nextNode()) {
      textNodes.push(currentNode);
    }
    
    // Process each text node
    textNodes.forEach(textNode => {
      const text = textNode.nodeValue;
      // Split text into words, maintaining punctuation
      const parts = text.split(/(\b\w+\b)/g);
      
      let modified = false;
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (/\b\w{4,}\b/i.test(part)) { // Only consider words with 4+ characters
          const lowerPart = part.toLowerCase();
          
          if (replacementMap[lowerPart] && Math.random() * 100 <= replacementPercentage) {
            const greWord = replacementMap[lowerPart];
            
            // Replace with same case pattern
            let replacement;
            if (part === part.toUpperCase()) {
              replacement = greWord.toUpperCase();
            } else if (part[0] === part[0].toUpperCase()) {
              replacement = greWord.charAt(0).toUpperCase() + greWord.slice(1);
            } else {
              replacement = greWord;
            }
            
            parts[i] = `<span class="gre-word" data-original="${part}" data-gre="${greWord}">${replacement}</span>`;
            modified = true;
            wordsReplacedCount++;
          }
        }
      }
      
      if (modified) {
        // Create a new element with replaced content
        const span = document.createElement('span');
        span.innerHTML = parts.join('');
        textNode.parentNode.replaceChild(span, textNode);
      }
    });
    
    // Add click handlers for GRE words
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('gre-word')) {
        e.preventDefault();
        showDefinition(e.target);
      } else if (!e.target.closest('.gre-popup') && document.querySelector('.gre-popup')) {
        document.querySelector('.gre-popup').remove();
      }
    });
    
    // Send the count to background script for popup to access
    getRuntimeAPI().sendMessage({
      action: "updateWordCount",
      count: wordsReplacedCount
    });
  }
  
  function showDefinition(element) {
    // Remove any existing popups
    const existingPopup = document.querySelector('.gre-popup');
    if (existingPopup) {
      existingPopup.remove();
    }
    
    const greWord = element.dataset.gre;
    const originalWord = element.dataset.original;
    const definition = greVocabulary[greWord].definition;
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'gre-popup';
    popup.innerHTML = `
      <div class="gre-popup-header">
        <span class="gre-word-title">${greWord}</span>
        <button class="gre-popup-close">×</button>
      </div>
      <div class="gre-popup-body">
        <p class="gre-definition">${definition}</p>
        <p class="gre-original">Original word: <strong>${originalWord}</strong></p>
      </div>
    `;
    
    // Position the popup near the word
    const rect = element.getBoundingClientRect();
    popup.style.top = (rect.bottom + window.scrollY + 5) + 'px';
    popup.style.left = ((rect.left + rect.right) / 2 + window.scrollX - 125) + 'px';
    
    document.body.appendChild(popup);
    
    // Add close button handler
    popup.querySelector('.gre-popup-close').addEventListener('click', function() {
      popup.remove();
    });
  }
  
  // Cross-browser compatibility functions
  function getStorageAPI() {
    return chrome.storage || browser.storage;
  }
  
  function getRuntimeAPI() {
    return chrome.runtime || browser.runtime;
  }
})();
