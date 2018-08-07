window.onscroll = function() {myFunction()};

var header = document.getElementById("blog-body");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.remove("head");
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.classList.add("head");
  }
}