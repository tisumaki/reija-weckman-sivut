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
    $(".read").click(function() {
        $(this).siblings(".more").toggle();
        if($(this).text()=='Read more'){
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
        }
    })
});