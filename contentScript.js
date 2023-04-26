// START FILE CHECK FOR NOTIFICATION
fetch('https://raw.githubusercontent.com/SintcoLTD/CDN/main/chrome-extension/sparxmaths/notifications/1.2/notification.txt')
  .then(response => response.text())
  .then(text => {
    // If notification.txt has any content, display an alert
    if (text.trim().length > 0) {
      alert(`Notification:\n\n${text}`);
    } else {
      // START FILE CHECK FOR PASSWORD
      fetch('https://raw.githubusercontent.com/SintcoLTD/CDN/main/chrome-extension/sparxmaths/PWD/password.txt')
        .then(response => response.text())
        .then(text => {
          if (text.trim().length === 0) {
            console.log('Password file is empty, continuing script...');
            return;
          }
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
            console.log('Chrome extension is not enabled, script will not continue.');
          }
        })
        .catch(error => console.log(error));
      // END FILE CHECK FOR PASSWORD
    }
  })
  .catch(error => console.log(error));
// END FILE CHECK FOR NOTIFICATION
