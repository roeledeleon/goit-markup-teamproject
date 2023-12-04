// Get the button
let myheader = document.getElementById('header');
let mynavbar = document.getElementById('navbar');

// When the user scrolls down 1px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    myheader.style.zIndex = 99;
    mynavbar.style.zindex = 101;
  } else {
    myheader.style.zIndex = 2;
    mynavbar.style.zindex = 2;
  }
}
