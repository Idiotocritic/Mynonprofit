// nav.js — opens/closes the mobile menu. Loaded on every page.
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}
