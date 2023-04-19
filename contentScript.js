// START FILE CHECK FOR 1.1
fetch('https://raw.githubusercontent.com/SintcoLTD/CDN/main/chrome-extension/sparxmaths/PWD/version-contentScript-lock/1.1.txt')
  .then(response => response.text())
  .then(text => {
    if (text.includes('CHROME EXTENSION ENABLE')) {
      // START PASSWORD CHECK
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
      // END PASSWORD CHECK
    } else {
      // Display file contents if it does not contain "CHROME EXTENSION ENABLE"
      alert(`ERROR MESSAGE!!!\n\n${text}`);
    }
  })
  .catch(error => console.log(error));
