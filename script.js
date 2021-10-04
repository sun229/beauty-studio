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
