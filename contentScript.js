// START FILE CHECK FOR NOTIFICATION
fetch('https://raw.githubusercontent.com/SintcoLTD/CDN/main/chrome-extension/sparxmaths/notifications/1.1/notification.txt')
  .then(response => response.text())
  .then(text => {
    // If notification.txt has any content, display an alert
    if (text.trim().length > 0) {
      alert(`Notification:\n\n${text}`);
    } else {
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
          }
        })
        .catch(error => console.log(error));
      // END FILE CHECK FOR 1.1
    }
  })
  .catch(error => console.log(error));
// END FILE CHECK FOR NOTIFICATION
