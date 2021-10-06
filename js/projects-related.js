/* eslint-disable no-undef */
const projectsContainer = document.querySelector('.projects-container');
const popupProject = document.querySelector('.popup-project');
const overlayDiv = document.querySelector('.overlay');

const projects = [
  {
    id: 1,
    title: 'FootAIz',
    picture: 'images/FootAIz.PNG',
    modalPicture: 'images/footAIz-modal.PNG',
    description: 'A software that makes football predictions based on artificial intelligence. Based on past data and various models, the software can make pretty accurate predictions in 16 differents football leagues in Europe.',
    technologies: ['node.js', 'brain.js', 'redis', 'Adaboost'],
    liveLink: 'https://google.com',
    codeLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'ScrabbleCoach',
    picture: 'images/scrabblecoach.PNG',
    modalPicture: 'images/scrabblecoach-modal.gif',
    description: 'An desktop application that helps scrabble players learning the words used in the french scrabble game (more than 400,000 words) from 2 to 15 letters long.',
    technologies: ['electron.js', 'express.js', 'indexedDB', 'css'],
    liveLink: 'https://google.com',
    codeLink: 'https://bitbucket.org/tmysteam/scrabblecoach/src/master/',
  },
  {
    id: 3,
    title: 'Awesome Books',
    picture: 'images/awesome-books.gif',
    modalPicture: 'images/awesome-books-modal.gif',
    description: 'A single page application that helps managing books by saving them in the LocalStorage.',
    technologies: ['Bootstrap 5', 'Javascript (ES6)', 'Luxon.js', 'CSS'],
    liveLink: 'https://kingjosh007.github.io/awesome-books/',
    codeLink: 'https://github.com/Kingjosh007/awesome-books',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    picture: 'assets/png/project_screenshot_placeholder.png',
    modalPicture: 'assets/png/modal_image.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    codeLink: 'https://github.com',
  },
];

// Render functions

function renderTechnologies(techArr) {
  let technologiesHtml = "<ul class='technologies-used'>";
  techArr.forEach((tech, index) => {
    technologiesHtml += `<li class='technology'>${tech}</li>`;
    if (index !== (techArr.length - 1)) {
      technologiesHtml += "<li class='separator'><img src='assets/svg/vertical_line.svg' alt='Line separing the technologies used in a project'></li>";
    }
  });
  technologiesHtml += '</ul>';
  return technologiesHtml;
}

function renderTechnologiesForModal(techArr) {
  let technologiesHtml = "<ul class='technologies-used'>";
  techArr.forEach((tech, index) => {
    if (index === 0) {
      technologiesHtml += "<li class='separator'><img src='assets/svg/vertical_line.svg' alt='Line separing the technologies used in a project'></li>";
    }
    technologiesHtml += `<li class='technology'>${tech}</li>`;
    technologiesHtml += "<li class='separator'><img src='assets/svg/vertical_line.svg' alt='Line separing the technologies used in a project'></li>";
  });
  technologiesHtml += '</ul>';
  return technologiesHtml;
}

function renderSingleProject(p) {
  const projectHtml = `<div class='project'>
       <div class='screenshot-container'>
         <img src='${p.picture}' alt='Screenshot of the project named ${p.title}'
            class='screenshot'>
       </div>
       <div class='project-rest'>
        <h3 class='project-title'>${p.title}</h3>
        <div class='project-description'>
            <p>${p.description}</p>
        </div>
        ${renderTechnologies(p.technologies)}
        <button class='project-details-btn' type='button' data-project-id='${p.id}'>See Project</button>
    </div>
</div>
    `;
  return projectHtml;
}

// Render projects dynamically in the HTML document
projectsContainer.innerHTML = projects.map((p) => renderSingleProject(p)).join('');

// Click event listener to projects buttons;
const projectDetailsBtns = document.querySelectorAll('.project-details-btn');

projectDetailsBtns.forEach((pdb) => {
  pdb.addEventListener('click', (event) => {
    const projectId = Number(event.target.getAttribute('data-project-id'));
    const projectToShow = projects.find((p) => p.id === projectId);

    popupProject.querySelector('.popup-title').textContent = projectToShow.title;
    popupProject.querySelector('.popup-image').src = projectToShow.modalPicture;
    popupProject.querySelectorAll('.popup-image').alt = `Image showing a preview of the project named ${projectToShow.title}`;
    popupProject.querySelector('.popup-long-description').textContent = projectToShow.description;
    popupProject.querySelector('.popup-technologies').innerHTML = renderTechnologiesForModal(projectToShow.technologies);
    popupProject.querySelector('.live-demo-btn').href = projectToShow.liveLink;
    popupProject.querySelector('.source-code-btn').href = projectToShow.codeLink;

    overlayDiv.style.display = 'block';
    popupProject.style.visibility = 'visible';
    popupProject.style.display = 'block';
    popupProject.style.opacity = 1;
    disableScroll();

    // Popup close
    const popupClose = document.querySelector('.popup-close');
    popupClose.addEventListener('click', () => {
      popupProject.style.opacity = 0;
      popupProject.style.visibility = 'hidden';
      overlayDiv.style.display = 'none';
      enableScroll();
    });
  });
});