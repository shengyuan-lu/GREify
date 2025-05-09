// popup/popup.js - Popup logic
document.addEventListener('DOMContentLoaded', function() {
  // Cross-browser compatibility
  const storageAPI = chrome.storage || browser.storage;
  const runtimeAPI = chrome.runtime || browser.runtime;
  const tabsAPI = chrome.tabs || browser.tabs;
  
  // UI elements
  const activeToggle = document.getElementById('extension-active');
  const toggleStatus = document.getElementById('toggle-status');
  const percentageValue = document.getElementById('percentage-value');
  const increaseButton = document.getElementById('increase-percentage');
  const decreaseButton = document.getElementById('decrease-percentage');
  const wordCountContainer = document.getElementById('word-count-container');
  const wordCountElement = document.getElementById('word-count');
  const statusText = document.getElementById('status-text');
  
  // Percentage values (25%, 50%, 75%, 100%)
  const percentageValues = [25, 50, 75, 100];
  let currentPercentageIndex = 0;
  
  // Load current settings
  storageAPI.local.get(['greVocabActive', 'replacementPercentage'], function(result) {
    // Set toggle state
    activeToggle.checked = result.greVocabActive || false;
    toggleStatus.textContent = result.greVocabActive ? 'On' : 'Off';
    
    // Set percentage value
    const percentage = result.replacementPercentage || 25;
    percentageValue.textContent = percentage + '%';
    currentPercentageIndex = percentageValues.indexOf(percentage);
    if (currentPercentageIndex === -1) currentPercentageIndex = 0;
    
    updateUI(result.greVocabActive);
    
    // If active, get current word count
    if (result.greVocabActive) {
      getCurrentTabAndSendMessage({
        action: "getWordCount"
      }, function(response) {
        if (response && typeof response.count !== 'undefined') {
          updateWordCount(response.count);
        }
      });
    }
  });
  
  // Toggle extension state
  activeToggle.addEventListener('change', function() {
    const isActive = this.checked;
    toggleStatus.textContent = isActive ? 'On' : 'Off';
    
    storageAPI.local.set({ greVocabActive: isActive });
    updateUI(isActive);
    
    // Send message to active tab
    getCurrentTabAndSendMessage({
      action: "toggleState",
      active: isActive
    }, function(response) {
      if (response && typeof response.wordsReplaced !== 'undefined') {
        updateWordCount(response.wordsReplaced);
      }
    });
  });
  
  // Increase replacement percentage
  increaseButton.addEventListener('click', function() {
    currentPercentageIndex = (currentPercentageIndex + 1) % percentageValues.length;
    updatePercentage();
  });
  
  // Decrease replacement percentage
  decreaseButton.addEventListener('click', function() {
    currentPercentageIndex = (currentPercentageIndex - 1 + percentageValues.length) % percentageValues.length;
    updatePercentage();
  });
  
  function updatePercentage() {
    const percentage = percentageValues[currentPercentageIndex];
    percentageValue.textContent = percentage + '%';
    
    storageAPI.local.set({ replacementPercentage: percentage });
    
    // Send message to active tab
    getCurrentTabAndSendMessage({
      action: "updatePercentage",
      percentage: percentage
    });
  }
  
  function updateUI(isActive) {
    if (isActive) {
      wordCountContainer.style.display = 'block';
      statusText.textContent = 'Click a highlighted word to see its definition';
    } else {
      wordCountContainer.style.display = 'none';
      statusText.textContent = 'Extension is disabled';
    }
  }
  
  function updateWordCount(count) {
    wordCountElement.textContent = count;
    if (count > 0) {
      wordCountContainer.style.display = 'block';
    } else {
      wordCountContainer.style.display = 'none';
    }
  }
  
  // Helper function to get current tab and send message
  function getCurrentTabAndSendMessage(message, callback) {
    tabsAPI.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        runtimeAPI.sendMessage({
          tabId: tabs[0].id,
          message: message
        }, callback);
        
        try {
          // Chrome style
          runtimeAPI.sendMessage(message, callback);
          // Also try direct tab messaging
          tabsAPI.sendMessage(tabs[0].id, message, callback);
        } catch (e) {
          // Safari style
          if (browser && browser.tabs) {
            browser.tabs.sendMessage(tabs[0].id, message).then(callback);
          }
        }
      }
    });
  }
});
