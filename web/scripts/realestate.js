
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Get the modal
var modal = document.getElementById('container_mainsignin');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*----hide the element in signIn Page-----*/
$(document).ready(function(){
  $(".signin_link").click(function(){
    $(".needstoregister-links").hide();
  });
  $(".alreadyregistered_link").click(function(){
    $(".txtname_signin").hide();
    $(".txtphone_signin").hide();
    $(".alreadyregistered_link").hide();
    $(".needstoregister-links").show();
   // $(".btnregister_signin").text('Login');
    $(".btnregister_signin").text("Login");
    
  });
  $(".needstoregister-links").click(function(){
      $(".txtname_signin").show();
    $(".txtphone_signin").show();
    $(".alreadyregistered_link").show();
    $(".needstoregister-links").hide();
     $(".btnregister_signin").text("Register");
  });
  
});
/*end SignIn*/

/*dropdown search*/
  $(".dropdown-menu li a").click(function(){
                var selText = $(this).text();
                $(this).parents(".dropdown").find(".dropdown-toggle").html(selText+' <span class="caret"></span>');
              });
    
/*end Search dropdown*/

/*slider*/
 $( function() {
     var outputspan=$('#spanOutput');
   $('#slider').slider({
   range:true,
        min:0,
        max:1000000,
        values:[70000,280000],
        slide:function(event,ui){
            outputspan.html(ui.values[0]+' - '+ ui.values[1]);
            
           
         }
   });
  } );
  /* end Slider*/
