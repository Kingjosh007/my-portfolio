const menuBtn = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

// mobileMenu.style.display = 'none';

// Scrolling functions
function disableScroll() {
  document.body.classList.add('unscrollable');
}
function enableScroll() {
  document.body.classList.remove('unscrollable');
}

// Handle click event on menu button
menuBtn.addEventListener('click', () => {
  const menuBtnClasses = menuBtn.classList;
  menuBtnClasses.toggle('open');

  const classMenu = mobileMenu.classList;
  if (classMenu.contains('hide')) {
    classMenu.replace('hide', 'show-on-mobile');
    disableScroll();
  } else if (classMenu.contains('show-on-mobile')) {
    classMenu.replace('show-on-mobile', 'hide');
    enableScroll();
  }
  // Handle click event on links from mobile menu;
  const links = mobileMenu.querySelectorAll('a');
  links.forEach((l) => l.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    classMenu.replace('show-on-mobile', 'hide');
    enableScroll();
  }));
});