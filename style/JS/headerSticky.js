// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    //navbar.classList.add("bg-opacity-75") //Ces lignes de codes servaient dans une version précédente où la transparence du ba&ckground dépendait de sa position dans la page
    //navbar.classList.remove("bg-opacity-50")
    navbar.classList.remove("my-2")
    navbar.classList.add("anim-navbar")
    navbar.classList.remove("anim-navbar-reverse")
  } else {
    navbar.classList.remove("sticky");
    //navbar.classList.add("bg-opacity-50")
    //navbar.classList.remove("bg-opacity-75")
    navbar.classList.add("my-2")
    navbar.classList.remove("anim-navbar")
    navbar.classList.add("anim-navbar-reverse")
  }
} 