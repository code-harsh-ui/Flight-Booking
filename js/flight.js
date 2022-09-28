// for flight page 


// Filter bar 
let headerFilter = document.querySelector('.filterHeader');
window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    headerFilter.classList.toggle('active', windowPosition)
})


// for phone hamburger-menu 

let headerFlight = document.querySelector('.header-flight'); 
let hamburgerMenuflight = document.querySelector('.hamburger-menu-flight');

hamburgerMenuflight.addEventListener('click', function(){
  headerFlight.classList.toggle('menu-open-flight');

})

// Range-slide in filter card 

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}   