const menuBtn = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  let classMenu = mobileMenu.classList;
  if (classMenu.contains('hide-on-mobile')) {
    classMenu.replace('hide-on-mobile', 'show-on-mobile');
  } else {
    classMenu.replace('show-on-mobile', 'hide-on-mobile');
  }
});