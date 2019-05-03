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