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