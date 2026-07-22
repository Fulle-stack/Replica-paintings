
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const cart = document.getElementById('cart');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    cart.classList.toggle('hidden');

});
