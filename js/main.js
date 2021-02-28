// Burger active
const burger = document.querySelector('.burger');
const burgerSpan = document.querySelector('.burger__item');
const drop = document.querySelector('.drop__block');
const dropClose = document.querySelector('.drop_close');
const mainImage = document.querySelector('.main__image');

burger.addEventListener('click', () => {
  burgerSpan.classList.toggle('burger__item_active');
  drop.classList.toggle('drop__block_active');
});

dropClose.addEventListener('click', () => {
  drop.classList.remove('drop__block_active');
  burgerSpan.classList.remove('burger__item_active');
});

// Remove drop-menu when coordsY > 400px
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 400) {
    drop.classList.remove('drop__block_active');
    burgerSpan.classList.remove('burger__item_active');
  }
}