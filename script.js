const loginButton = document.querySelector('.btn');
const registrationEL = document.querySelector('.registration');
loginButton.addEventListener('click', function (e) {
    registrationEL.classList.toggle('registration');
});

const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
burgerEl.addEventListener('click', function () {
    burgerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
});

const slider = document.getElementById("myRange");
const output = document.getElementById("rating");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
}

const buttonEl = document.querySelector('.delete');
buttonEl.addEventListener('click', function (e) {
    output.innerHTML = '0';
});