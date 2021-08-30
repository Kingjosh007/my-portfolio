let menuBtn = document.querySelector('.hamburger-icon');
let mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', (event) => {
    menuBtn.classList.toggle("open");
})