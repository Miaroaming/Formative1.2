
let openHam = document.getElementById('openHam');
let closeHam = document.getElementById('closeHam');
let navigationItems = document.getElementById('navigation-items');

// Arrow Function with arguements & parameters
const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

// Add function to click events with the correct paramenters
openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));



let card1 = document.querySelector(".card-parent1");
let card2 = document.querySelector(".card-parent2");
let card3 = document.querySelector(".card-parent3");

card1.addEventListener("click", function () {
    window.location.href = 'about.html'
});

card2.addEventListener("click", function () {
    window.location.href = 'about.html'
});

card3.addEventListener("click", function () {
    window.location.href = 'about.html'
});