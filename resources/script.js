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