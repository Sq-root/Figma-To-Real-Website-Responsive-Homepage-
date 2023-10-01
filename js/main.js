let navbar = document.querySelector(".navbar");
let mobilenav = document.querySelector(".mobile-nav");
let menuicon = document.querySelector(".menu-icon");
let closeicon = document.querySelector(".close-icon");
let mobilemenu = document.querySelector(".mobile-menu-container");


window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    mobilenav.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    mobilenav.classList.remove("scrolled");
  }
});

//Open Menu
menuicon.addEventListener("click", () => {
  mobilemenu.classList.toggle("open");
});
//Close Menu
closeicon.addEventListener("click", () => {
  mobilemenu.classList.remove("open");
});
