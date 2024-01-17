//scroll to top button functionality
let myBtn = document.getElementById("scroll-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};

myBtn.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
    console.log('clicked the button');
})
