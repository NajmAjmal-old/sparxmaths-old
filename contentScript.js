chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'continueScript') {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('inject.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
    console.log('Password entered correctly! Continuing script...');
  }
});

