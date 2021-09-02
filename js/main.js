const menuBtn = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

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

// Handle form submission

const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

const contactForm = document.forms['contact-form'];
const emailInput = contactForm.email;
const nameInput = contactForm.name;
const textarea = contactForm.message;
const messagePanel = document.querySelector('.message-panel');
const submitButton = document.querySelector('.contact-form-btn');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  if (!isLowerCase(email)) {
    messagePanel.innerHTML = '<p><b>Error:</b> Your email address should be lowercase.</p>';
    messagePanel.style.visibility = 'visible';
    submitButton.style.marginTop = '30px';
  } else {
    messagePanel.style.visibility = 'hidden';
    contactForm.submit();
  }
});

const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const retrieveFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

// LocalStorage persistence

const savedData = retrieveFromLocalStorage('formData');
if (savedData !== null) {
  nameInput.value = savedData.name;
  emailInput.value = savedData.email;
  textarea.value = savedData.message;
}

const formElts = document.querySelectorAll('input, textarea');
formElts.forEach((fe) => {
  fe.addEventListener('input', () => {
    submitButton.style.marginTop = '-15px';
    messagePanel.style.visibility = 'hidden';
    // Save object
    const objectToSave = {
      name: nameInput.value,
      email: emailInput.value,
      message: textarea.value,
    };
    saveToLocalStorage('formData', objectToSave);
  });
});
