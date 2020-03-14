// When the user scrolls the page, execute getStickyHeader
window.onscroll = function() {getStickyHeader()};

// Get the header
let header = document.getElementById("header");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function getStickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}