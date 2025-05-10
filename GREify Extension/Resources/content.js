 (function () {
     let isActive = true;
     let replacementPercentage = 100;
     let wordsReplacedCount = 0;

     const storageAPI = getStorageAPI();
     storageAPI.local.get(['greVocabActive', 'replacementPercentage'], function (result) {
         isActive = result.greVocabActive;
         replacementPercentage = result.replacementPercentage;

         if (isActive) {
             processPage();
             getRuntimeAPI().sendMessage({
                 action: "updateWordCount",
                 count: wordsReplacedCount
             });
         }
     });

     getRuntimeAPI().onMessage.addListener(function (request, sender, sendResponse) {
         if (request.message) request = request.message;

         if (request.action === "toggleState") {
             
             location.reload();
             
             isActive = request.active;

             if (isActive) {
                 processPage();
                 sendResponse({ status: "success", wordsReplaced: wordsReplacedCount });
             } else {
                 sendResponse({ status: "success", wordsReplaced: 0 });
             }
         } else if (request.action === "updatePercentage") {
             location.reload();
             processPage();
             replacementPercentage = request.percentage;
             sendResponse({ status: "success" });
         } else if (request.action === "getWordCount") {
             sendResponse({ count: wordsReplacedCount });
         }
         return true;
     });

     function processPage() {
		 if (
			 // Major search engines
			 window.location.href.includes("google.com/search") ||
			 window.location.href.includes("bing.com/search") ||
			 window.location.href.includes("yahoo.com/search") ||
			 window.location.href.includes("duckduckgo.com") ||
			 window.location.href.includes("baidu.com/s") ||
			 window.location.href.includes("yandex.com/search") ||
			 window.location.href.includes("search.brave.com") ||
			 window.location.href.includes("ask.com/web") ||
			 window.location.href.includes("aol.com/search") ||
			 window.location.href.includes("ecosia.org/search") ||
			 window.location.href.includes("startpage.com/sp/search") ||
			 window.location.href.includes("qwant.com") ||
			 
			 // Major dictionary websites
			 window.location.href.includes("dictionary.com") ||
			 window.location.href.includes("merriam-webster.com") ||
			 window.location.href.includes("oxfordlearnersdictionaries.com") ||
			 window.location.href.includes("cambridge.org/dictionary") ||
			 window.location.href.includes("collinsdictionary.com") ||
			 window.location.href.includes("vocabulary.com") ||
			 window.location.href.includes("thefreedictionary.com") ||
			 window.location.href.includes("lexico.com") ||
			 window.location.href.includes("macmillandictionary.com") ||
			 window.location.href.includes("wordreference.com") ||
			 window.location.href.includes("longman.com/dictionary") ||
			 window.location.href.includes("yourdictionary.com") ||
			 window.location.href.includes("wiktionary.org")
			 ) {
				 getRuntimeAPI().sendMessage({ action: "updateWordCount", count: 0 });
				 return;
			 }


         const replacementMap = {};
         Object.keys(greVocabulary).forEach(greWord => {
             greVocabulary[greWord].replaces.forEach(commonWord => {
                 replacementMap[commonWord.toLowerCase()] = greWord;
             });
         });

         const walker = document.createTreeWalker(
             document.body,
             NodeFilter.SHOW_TEXT,
             {
                 acceptNode: function (node) {
                     if (
                         node.parentNode.tagName === 'SCRIPT' ||
                         node.parentNode.tagName === 'STYLE' ||
                         node.parentNode.className === 'gre-popup'
                     ) {
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

                         parts[i] = `<span class="gre-word" data-original="${part}" data-gre="${greWord}">${replacement}</span>`;
                         modified = true;
                         wordsReplacedCount++;
                     }
                 }
             }

             if (modified) {
                 const span = document.createElement('span');
                 span.innerHTML = parts.join('');
                 textNode.parentNode.replaceChild(span, textNode);
             }
         });

         document.addEventListener('click', function (e) {
             if (e.target.classList.contains('gre-word')) {
                 e.preventDefault();
                 showDefinition(e.target);
             } else if (!e.target.closest('.gre-popup') && document.querySelector('.gre-popup')) {
                 document.querySelector('.gre-popup').remove();
             }
         });

         getRuntimeAPI().sendMessage({
             action: "updateWordCount",
             count: wordsReplacedCount
         });
     }

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
         popup.innerHTML = `
             <div class="gre-popup-header">
                 <span class="gre-word-title">${greWord}</span>
                 <button class="gre-popup-close">×</button>
             </div>
             <div class="gre-popup-body">
                 <p class="gre-original">Original word: <strong>${originalWord}</strong></p>
                 <p class="gre-definition">${definition}</p>
             </div>
             <div class="gre-popup-header">
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

         popup.querySelector('.gre-popup-close').addEventListener('click', function () {
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
 })();

