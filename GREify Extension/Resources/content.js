(function() {
	let isActive = true;
	let replacementPercentage = 100;
	let wordsReplacedCount = 0;
	let isProcessing = false;
	
	const storageAPI = getStorageAPI();
	storageAPI.local.get(['greVocabActive', 'replacementPercentage'], function(result) {
		isActive = result.greVocabActive !== undefined ? result.greVocabActive : true;
		replacementPercentage = result.replacementPercentage !== undefined ? result.replacementPercentage : 100;
		
		if (isActive) {
			processPage();
			updateWordCount();
		}
	});
	
	// Handle messages from popup/background
	getRuntimeAPI().onMessage.addListener(function(request, sender, sendResponse) {
		if (request.message) request = request.message;
		
		if (request.action === "toggleState") {
			isActive = request.active;
			location.reload();
			
			if (isActive) {
				processPage();
				sendResponse({
					status: "success",
					wordsReplaced: wordsReplacedCount
				});
			} else {
				sendResponse({
					status: "success",
					wordsReplaced: 0
				});
			}
		} else if (request.action === "updatePercentage") {
			replacementPercentage = request.percentage;
				// Don't reload the page immediately, but defer to allow response
			sendResponse({
				status: "success"
			});
			
				// Now reload the page after sending the response
			setTimeout(() => {
				location.reload();
			}, 100);
		} else if (request.action === "getWordCount") {
			sendResponse({
				count: wordsReplacedCount
			});
		}
		return true;
	});
	
	// Reset and reprocess the page
	function resetAndProcess() {
		// Remove all GRE words
		const greWords = document.querySelectorAll('.gre-word');
		greWords.forEach(el => {
			const textNode = document.createTextNode(el.dataset.original);
			el.parentNode.replaceChild(textNode, el);
		});
		
		// Remove popups
		const popups = document.querySelectorAll('.gre-popup');
		popups.forEach(popup => popup.remove());
		
		// Reset counter and process again
		wordsReplacedCount = 0;
		processPage();
	}
	
	// Add mutation observer to handle dynamic content
	const observer = new MutationObserver(function(mutations) {
		if (!isActive || isProcessing) return;
		
		let shouldProcess = false;
		
		mutations.forEach(mutation => {
			if (mutation.addedNodes.length > 0) {
				for (let i = 0; i < mutation.addedNodes.length; i++) {
					const node = mutation.addedNodes[i];
					if (node.nodeType === Node.ELEMENT_NODE && !node.classList?.contains('gre-popup')) {
						shouldProcess = true;
						break;
					}
				}
			}
		});
		
		if (shouldProcess) {
			processNewContent();
		}
	});
	
	// Start observing after initial processing
	setTimeout(() => {
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	}, 1000);
	
	// Process only new content
	function processNewContent() {
		if (shouldSkipPage()) {
			return;
		}
		
		isProcessing = true;
		const replacementMap = buildReplacementMap();
		
		const walker = document.createTreeWalker(
												 document.body,
												 NodeFilter.SHOW_TEXT, {
													 acceptNode: function(node) {
															 // Skip if already processed (parent has processed children)
														 if (node.parentNode.closest('.gre-processed') ||
															 node.parentNode.tagName === 'SCRIPT' ||
															 node.parentNode.tagName === 'STYLE' ||
															 node.parentNode.className === 'gre-popup' ||
															 node.parentNode.closest('.gre-popup')) {
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
				// Skip if text is very short or already processed
			if (currentNode.textContent.trim().length < 4 ||
				currentNode.parentNode.classList?.contains('gre-word')) {
				continue;
			}
			textNodes.push(currentNode);
		}
		
		processTextNodes(textNodes, replacementMap);
		isProcessing = false;
		updateWordCount();
	}
	
	// Function to detect dark mode based only on website background
	function isDarkMode() {
		// Check background color of key elements
		const elementsToCheck = [
			document.body,
			document.documentElement,
			document.querySelector('main'),
			document.querySelector('article'),
			document.querySelector('.content'),
			document.querySelector('#content')
		].filter(Boolean); // Filter out null elements
		
		// Function to determine if a color is dark
		function isDarkColor(color) {
			if (!color || color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
				return false;
			}
			
			// Extract RGB values
			let rgb = color.match(/\d+/g);
			if (!rgb || rgb.length < 3) return false;
			
			// Calculate luminance (perceived brightness)
			const luminance = (0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2])) / 255;
			return luminance < 0.5;
		}
		
		// Check if any of the elements have a dark background
		for (const element of elementsToCheck) {
			const bgColor = window.getComputedStyle(element).backgroundColor;
			if (isDarkColor(bgColor)) {
				return true;
			}
		}
		
		// As a fallback, check if text color is light (suggesting dark background)
		const textColor = window.getComputedStyle(document.body).color;
		if (textColor) {
			let rgb = textColor.match(/\d+/g);
			if (rgb && rgb.length >= 3) {
				const textLuminance = (0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2])) / 255;
				if (textLuminance > 0.7) { // If text is light, background is likely dark
					return true;
				}
			}
		}
		
		return false;
	}
	
	function processPage() {
		if (shouldSkipPage()) {
			updateWordCount();
			return;
		}
		
		isProcessing = true;
		wordsReplacedCount = 0;
		const replacementMap = buildReplacementMap();
		
		const walker = document.createTreeWalker(
												 document.body,
												 NodeFilter.SHOW_TEXT, {
													 acceptNode: function(node) {
														 if (node.parentNode.tagName === 'SCRIPT' ||
															 node.parentNode.tagName === 'STYLE' ||
															 node.parentNode.className === 'gre-popup' ||
															 node.parentNode.closest('.gre-popup')) {
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
		
		processTextNodes(textNodes, replacementMap);
		isProcessing = false;
		updateWordCount();
		
		// Mark elements as processed to avoid reprocessing
		document.querySelectorAll('p, div, span, article').forEach(el => {
			if (!el.classList.contains('gre-popup') &&
				!el.classList.contains('gre-word')) {
				el.classList.add('gre-processed');
			}
		});
	}
	
	function processTextNodes(textNodes, replacementMap) {
		textNodes.forEach(textNode => {
			const text = textNode.nodeValue;
			const parts = text.split(/(\b\w+\b)/g);
			
			let modified = false;
			
			for (let i = 0; i < parts.length; i++) {
				const part = parts[i];
				if (/\b\w{4,}\b/i.test(part)) {
					const lowerPart = part.toLowerCase();
					
					if (replacementMap[lowerPart] && Math.random() * 100 <= replacementPercentage) {
						const greWord = replacementMap[lowerPart];
						
						let replacement;
						if (part === part.toUpperCase()) {
							replacement = greWord.toUpperCase();
						} else if (part[0] === part[0].toUpperCase()) {
							replacement = greWord.charAt(0).toUpperCase() + greWord.slice(1);
						} else {
							replacement = greWord;
						}
						
						// Add specific class for dark mode if needed
						const darkModeClass = isDarkMode() ? 'gre-word-dark' : 'gre-word-light';
						parts[i] = `<span class="gre-word ${darkModeClass}" data-original="${part}" data-gre="${greWord}">${replacement}</span>`;
						modified = true;
						wordsReplacedCount++;
					}
				}
			}
			
			if (modified) {
				const span = document.createElement('span');
				span.innerHTML = parts.join('');
				if (textNode.parentNode) {
					textNode.parentNode.replaceChild(span, textNode);
				}
			}
		});
	}
	
	function shouldSkipPage() {
		const skipDomains = [
			// Search engines
			"google.com/search", "bing.com/search", "yahoo.com/search",
			"duckduckgo.com", "baidu.com/s", "yandex.com/search",
			"search.brave.com", "ask.com/web", "aol.com/search",
			"ecosia.org/search", "startpage.com/sp/search", "qwant.com",
			
			// Dictionary websites
			"dictionary.com", "merriam-webster.com", "oxfordlearnersdictionaries.com",
			"cambridge.org/dictionary", "collinsdictionary.com", "vocabulary.com",
			"thefreedictionary.com", "lexico.com", "macmillandictionary.com",
			"wordreference.com", "longman.com/dictionary", "yourdictionary.com",
			"wiktionary.org"
		];
		
		return skipDomains.some(domain => window.location.href.includes(domain));
	}
	
	function buildReplacementMap() {
		const replacementMap = {};
		Object.keys(greVocabulary).forEach(greWord => {
			greVocabulary[greWord].replaces.forEach((commonWord, index) => {
				const lowerCommonWord = commonWord.toLowerCase();
				if (!replacementMap[lowerCommonWord] ||
					(replacementMap[lowerCommonWord] &&
					 greVocabulary[replacementMap[lowerCommonWord]].replaces.indexOf(commonWord) > index)) {
					replacementMap[lowerCommonWord] = greWord;
				}
			});
		});
		return replacementMap;
	}
	
	function updateWordCount() {
		getRuntimeAPI().sendMessage({
			action: "updateWordCount",
			count: wordsReplacedCount
		});
	}
	
	document.addEventListener('click', function(e) {
		if (e.target.classList.contains('gre-word')) {
			e.preventDefault();
			showDefinition(e.target);
		} else if (!e.target.closest('.gre-popup') && document.querySelector('.gre-popup')) {
			document.querySelector('.gre-popup').remove();
		}
	});
	
	// Apply dark mode to popup if needed
	function showDefinition(element) {
		const existingPopup = document.querySelector('.gre-popup');
		if (existingPopup) existingPopup.remove();
		
		const greWordRaw = element.dataset.gre;
		const originalWordRaw = element.dataset.original;
		const definitionRaw = greVocabulary[greWordRaw].definition;
		
		const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
		
		const greWord = capitalize(greWordRaw);
		const originalWord = capitalize(originalWordRaw);
		const definition = capitalize(definitionRaw);
		
		const popup = document.createElement('div');
		popup.className = 'gre-popup';
		
		// Add dark mode class if needed
		if (isDarkMode()) {
			popup.classList.add('dark-mode-popup');
		}
		
		popup.innerHTML = `
   <div class="gre-popup-header">
	<span class="gre-word-title">${greWord}</span>
	<button class="gre-popup-close">×</button>
   </div>
   <div class="gre-popup-body">
	<p class="gre-original">Original word: <strong>${originalWord}</strong></p>
	<p class="gre-definition">${definition}</p>
   </div>
   <div class="gre-popup-footer">
	<p class="gre-original">Replaced by GREify</p>
   </div>
  `;
		
		const rect = element.getBoundingClientRect();
		const popupWidth = 250;
		const popupHeight = 120;
		
		let top = rect.bottom + window.scrollY + 10;
		let left = rect.left + window.scrollX + 10;
		
		if ((left + popupWidth) > window.innerWidth) {
			left = window.innerWidth - popupWidth - 10;
		}
		if ((top + popupHeight) > window.innerHeight + window.scrollY) {
			top = rect.top + window.scrollY - popupHeight - 10;
		}
		
		popup.style.position = 'absolute';
		popup.style.top = `${top}px`;
		popup.style.left = `${left}px`;
		popup.style.zIndex = 9999;
		
		document.body.appendChild(popup);
		
		popup.querySelector('.gre-popup-close').addEventListener('click', function() {
			popup.remove();
		});
	}
	
	function getStorageAPI() {
		return (typeof chrome !== 'undefined' && chrome.storage) ||
		(typeof browser !== 'undefined' && browser.storage);
	}
	
	function getRuntimeAPI() {
		return (typeof chrome !== 'undefined' && chrome.runtime) ||
		(typeof browser !== 'undefined' && browser.runtime);
	}
	
	// Add dark mode detection and custom styles
	function isDarkMode() {
		// Method 1: Check prefers-color-scheme media query
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return true;
		}
		
		// Method 2: Check background color
		const bodyBg = window.getComputedStyle(document.body).backgroundColor;
		const html = window.getComputedStyle(document.documentElement).backgroundColor;
		
		// Function to determine if a color is dark
		function isDarkColor(color) {
			if (!color || color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
				return false;
			}
			
			// Extract RGB values
			let rgb = color.match(/\d+/g);
			if (!rgb || rgb.length < 3) return false;
			
			// Calculate luminance
			const luminance = (0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2])) / 255;
			return luminance < 0.5;
		}
		
		// Check if body or html has dark background
		return isDarkColor(bodyBg) || isDarkColor(html);
	}
	
	// Create dynamic styles based on dark/light mode
	const darkMode = isDarkMode();
})();
