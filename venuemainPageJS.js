// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var stickyNav = document.getElementById("stickyNav");

// Get the offset position of the navbar
var sticky = stickyNav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    stickyNav.classList.add("sticky")
  } else {
    stickyNav.classList.remove("sticky");
  }
}