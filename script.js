//Responsive navbar
const toggleBtn = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const navberLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navberLinks.addEventListener("click", () => {
  navbar.classList.remove("active");
});


//animation
const secTitle = document.querySelectorAll(".section-title");
document.addEventListener("scroll", function(){
  for (let i =0; i < secTitle.length; i++) {
    const getElementDistance = secTitle[i].
    getBoundingClientRect().top + secTitle[i].clientHeight * 2

    if(window.innerHeight > getElementDistance) {
      secTitle[i].classList.add("show");
    }
  }
})

const target = document.querySelectorAll(".target");
document.addEventListener("scroll", function(){
  for (let i =0; i < target.length; i++) {
    const getElementDistance = target[i].
    getBoundingClientRect().top + target[i].clientHeight * 0.5

    if(window.innerHeight > getElementDistance) {
      target[i].classList.add("show");
    }
  }
})