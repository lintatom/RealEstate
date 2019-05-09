function loadPage(page){
  switch(page){
      case 'contact':
          fetch('./contact.html')
                  .then(res => res.text())
                  .then(html => fillContent(html, 'services'))
                  .then(function() {
                        // profile
                        fetch('./profile.html')
                            .then(res => res.text())
                            .then(html => fillContent(html, 'agent-detail'));
                    });
          break;
          case 'buyers':
           fetch('./buyers.html')
                  .then(res => res.text())
                  .then(html => fillContent(html, 'services'))
                  .then(function() {
                      fetch('./profile.html')
                            .then(res => res.text())
                            .then(html => fillContent(html, 'buyer_img'));
                        fetch('./contact.html')
                            .then(res => res.text())
                            .then(html => fillContent(html, 'buyer_contact'));
                    });
          break;
          case 'sellers':
           fetch('./sellers.html')
                  .then(res => res.text())
                  .then(html => fillContent(html, 'services'))
                  .then(function() {
                      fetch('./profile.html')
                            .then(res => res.text())
                            .then(html => fillContent(html, 'buyer_img'));
                        fetch('./contact.html')
                            .then(res => res.text())
                            .then(html => fillContent(html, 'buyer_contact'));
                    });
          break;
          
          case 'about':
           fetch('./about.html')
                  .then(res => res.text())
                  .then(html => fillContent(html, 'services'))
                  .then(function() {
                      fetch('./profile.html')
                            .then(res => res.text())
                            .then(html => fillContent(html, 'about_agentimg'));
                        fetch('./contact.html')
                            .then(res => res.text())
                            .then(html => fillContent(html, 'about_contact'));
                    });
          break;
          
      default:
          fetch('./home.html')
            .then(res => res.text())
            .then(html => fillContent(html, 'services'))
            .then(function() {
                // profile
                fetch('./profile.html')
                    .then(res => res.text())
                    .then(html => fillContent(html, 'agent-profile'));
            });
  }  
}

function fillContent(html, containerId){
    var mainContainer=document.getElementById(containerId);
    mainContainer.innerHTML=html;
}

// event listener for "page load" event
window.onload = function() {
    loadPage();
};