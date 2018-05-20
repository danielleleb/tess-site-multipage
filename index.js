'use strict';

const mobileNavA = document.querySelector('.mobile-nav');
const fullNav = document.querySelector('.main-nav');
const navLink = document.querySelector('.main-nav__item');
const mobileExit = document.querySelector('.mobile-exit');
const portfolioImages = document.querySelectorAll('.image-grid__square');

const hideNav = function() {
    fullNav.classList.add('main-nav-hidden');
};

mobileExit.addEventListener('click', () => hideNav());

mobileNavA.addEventListener('click', function() {
    fullNav.classList.remove('main-nav-hidden');
})

navLink.addEventListener('click', () => hideNav());

// portfolioImages.forEach(image => {

// })

