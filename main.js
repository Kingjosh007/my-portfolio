const menuBtn = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

// Scrolling functions
function disableScroll() {
  document.body.classList.add('unscrollable');
}
function enableScroll() {
  document.body.classList.remove('unscrollable');
}

// Handle click event on menu button
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  const classMenu = mobileMenu.classList;
  if (classMenu.contains('hide-on-mobile')) {
    classMenu.replace('hide-on-mobile', 'show-on-mobile');
    disableScroll();
  } else if (classMenu.contains('show-on-mobile')) {
    classMenu.replace('show-on-mobile', 'hide-on-mobile');
    enableScroll();
  }
  // Handle click event on links from mobile menu;
  const links = mobileMenu.querySelectorAll('a');
  links.forEach((l) => l.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    classMenu.replace('show-on-mobile', 'hide-on-mobile');
    enableScroll();
  }));
});
