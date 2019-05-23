/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function togglePopup(){
    var contactLink=document.getElementById('contact_link')
    if(!contactLink) return;
    
    contactLink.addEventListener('click',function(){
        var popup=document.getElementById('contact-popup');
        popup.style.display='block';
        
    })
}
window.onload = function(){
    togglePopup();
}
