window.onscroll = function() {stickyNav()};

var navbar = document.querySelector('.nav-container');

var sticky = navbar.offsetTop;

function stickyNav() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}