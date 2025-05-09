// popup/popup.js - Popup logic
document.addEventListener('DOMContentLoaded', function() {
  // Cross-browser compatibility - check for existence first
  const storageAPI = (chrome && chrome.storage) || (browser && browser.storage);
  const runtimeAPI = (chrome && chrome.runtime) || (browser && browser.runtime);
  const tabsAPI = (chrome && chrome.tabs) || (browser && browser.tabs);
  
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
    updateButtonStates();
    
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
    if (currentPercentageIndex < percentageValues.length - 1) {
      currentPercentageIndex++;
      updatePercentage();
      updateButtonStates();
    }
  });
  
  // Decrease replacement percentage
  decreaseButton.addEventListener('click', function() {
    if (currentPercentageIndex > 0) {
      currentPercentageIndex--;
      updatePercentage();
      updateButtonStates();
    }
  });
  
  function updatePercentage() {
    const percentage = percentageValues[currentPercentageIndex];
    percentageValue.textContent = percentage + '%';
    
    storageAPI.local.set({ replacementPercentage: percentage });
    
    // Send message to active tab to update percentage
    getCurrentTabAndSendMessage({
      action: "updatePercentage",
      percentage: percentage
    });
  }
  
  function updateButtonStates() {
    // Disable decrease button if at minimum percentage (25%)
    if (currentPercentageIndex === 0) {
      decreaseButton.disabled = true;
      decreaseButton.classList.add('disabled');
    } else {
      decreaseButton.disabled = false;
      decreaseButton.classList.remove('disabled');
    }
    
    // Disable increase button if at maximum percentage (100%)
    if (currentPercentageIndex === percentageValues.length - 1) {
      increaseButton.disabled = true;
      increaseButton.classList.add('disabled');
    } else {
      increaseButton.disabled = false;
      increaseButton.classList.remove('disabled');
    }
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
  }
  
  // Helper function to get current tab and send message
  function getCurrentTabAndSendMessage(message, callback) {
    tabsAPI.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs && tabs[0]) {
        try {
          // Try direct tab messaging for Chrome
          if (chrome && chrome.tabs) {
            chrome.tabs.sendMessage(tabs[0].id, message, callback);
          }
          // Safari-style messaging
          else if (browser && browser.tabs) {
            browser.tabs.sendMessage(tabs[0].id, message).then(callback);
          }
        } catch (e) {
          console.error("Error sending message:", e);
          
          // Fallback to runtime messaging
          if (runtimeAPI) {
            runtimeAPI.sendMessage({
              tabId: tabs[0].id,
              message: message
            }, callback);
          }
        }
      }
    });
  }
});
