window.onscroll = function() {stickyNav()};

var navbar = document.querySelector('.nav-container');

var sticky = navbar.offsetTop;

function stickyNav() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    navbar.classList.add("sticky");
    
  } else {
    navbar.classList.remove("sticky");
  }
}