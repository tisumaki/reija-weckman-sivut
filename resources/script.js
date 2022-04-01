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
    let section1 = $(".more-services").closest("section");
    $(".top").click(function() {
        $(this).siblings(".more-services").toggle();
        if($(this).text()=='Read more'){
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
            $('html,body').animate({
                scrollTop: $(section1).offset().top},
                'fast');
        }
    })
});

$(document).ready(function() {
    let section2 = $(".more-about").closest("section");
    $(".read").click(function() {
        $(this).siblings(".more-about").toggle();
        if($(this).text()=='Read more'){
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
            $('html,body').animate({
                scrollTop: $(section2).offset().top},
                'fast');
        }
    })
});