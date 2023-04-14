var s = document.createElement('script');
s.src = chrome.runtime.getURL('inject.js');
s.onload = function() {
    this.remove();
};

(document.head || document.documentElement).appendChild(s);

// The contentScipt.js is used by the manifest.json (Chrome extension info & permisions) to activate "inject.js"
