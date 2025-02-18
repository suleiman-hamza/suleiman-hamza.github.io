// instersection observer API
const target = document.querySelector('.target')
const proper = document.querySelector('.proper')
const player = document.querySelector('.player')
const touch = document.querySelector('.touch')


let option = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}

let collect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
    }
  })
}
let observer = new IntersectionObserver(collect, option)

observer.observe(target)
observer.observe(proper)
observer.observe(player)
observer.observe(touch)


//scroll to top button functionality
document.addEventListener("DOMContentLoaded", function() {
  //scroll to top button functionality
  let myBtn = document.getElementById("scroll-to-top");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          myBtn.style.display = "block";
      } else {
          myBtn.style.display = "none";
      }
  }

  myBtn.addEventListener('click', function() {
      document.documentElement.scrollTop = 0;
      console.log('clicked the button');
  });
});
