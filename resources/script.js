$("document").ready(function($){
  var nav = $('.nav-container-fixed');

  $(window).scroll(function () {
      if ($(this).scrollTop() >= 550) {
          nav.addClass("sticky");
      } else {
          nav.removeClass("sticky");
      }
  });
});

$(document).ready(function() {
    $(".top").click(function() {
        $(this).siblings(".more-services").toggle();
        if($(this).text()=='Read more'){
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
            $('html,body').animate({
                scrollTop: $("#services").offset().top},
                'fast');
        }
    })
});

$(document).ready(function() {
    $(".read").click(function() {
        $(this).siblings(".more-about").toggle();
        if($(this).text()=='Read more'){
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
            $('html,body').animate({
                scrollTop: $("#about-me").offset().top},
                'fast');
        }
    })
});

function disableSubmit() {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("submit-btn").style.opacity = "0.75";
   }
  
    function activateButton(element) {
  
        if(element.checked) {
          document.getElementById("submit-btn").disabled = false;
          document.getElementById("submit-btn").style.opacity = "1";
         }
         else  {
          document.getElementById("submit-btn").disabled = true;
          document.getElementById("submit-btn").style.opacity = "0.75";
        }
  
    }