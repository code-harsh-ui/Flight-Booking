




// for navigation-bar shrink 
window.addEventListener('scroll', function(){
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('activee', windowPosition)
})


// for phone hamburger menu 
let header = document.querySelector('.header'); 
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function(){
    header.classList.toggle('menu-open');

})


// Home page booking banner 
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {

    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");

  })
}


