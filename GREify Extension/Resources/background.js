// background.js - Background script for extension
// Cross-browser compatibility
const storageAPI = chrome.storage || browser.storage;
const runtimeAPI = chrome.runtime || browser.runtime;
const tabsAPI = chrome.tabs || browser.tabs;

// Word count for the current page
let currentPageWordCount = 0;

// Set default settings when extension is installed
runtimeAPI.onInstalled.addListener(function() {
  storageAPI.local.set({
    greVocabActive: true,
    replacementPercentage: 100
  });
});

// Listen for messages from content script
runtimeAPI.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "updateWordCount") {
    currentPageWordCount = request.count;
    storageAPI.local.get(['greVocabActive'], function(result) {
        updateBadge(currentPageWordCount);
    });
  }
  return true;
});

// Update badge with count of replaced words
function updateBadge(count) {
  if (count > 0) {
    // Set badge text (Chrome style)
    if (chrome.action) {
      chrome.action.setBadgeText({ text: count.toString() });
      chrome.action.setBadgeBackgroundColor({ color: '#005cbf' });
    }
    // Safari compatibility
    else if (browser && browser.browserAction) {
      browser.browserAction.setBadgeText({ text: count.toString() });
      browser.browserAction.setBadgeBackgroundColor({ color: '#005cbf' });
    }
  } else {
    // Clear badge when no words are replaced
    if (chrome.action) {
      chrome.action.setBadgeText({ text: '' });
    } else if (browser && browser.browserAction) {
      browser.browserAction.setBadgeText({ text: '' });
    }
  }
}
