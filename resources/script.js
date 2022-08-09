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
        $(this).siblings(".more-services").slideToggle(400);
        if($(this).text()=='Read more'){
            $(this).text('Read less');
            $(".more-services").css('display', '');
        } else {
            $(this).text('Read more');
            $('html,body').animate({
                scrollTop: $("#services").offset().top -50},
                'fast');
        }
    })
});


$(document).ready(function() {
    $(".read").click(function() {
        $(this).siblings(".more-about").slideToggle(400);
        if($(this).text()=='Read more'){
            $(this).text('Read less');
            $(".more-about").css('display', '');
        } else {
            $(this).text('Read more');
            $('html,body').animate({
                scrollTop: $("#about-me").offset().top -50},
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