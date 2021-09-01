// Declare projects array
const projectsContainer = document.querySelector('.projects-container');
const popupProject = document.querySelector('.popup-project');

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
    title: 'Multi-Post Stories',
    picture: 'assets/png/project_screenshot_placeholder.png',
    modalPicture: 'assets/png/modal_image.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://google.com',
    codeLink: 'https://github.com',
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
let projectDetailsBtns = document.querySelectorAll('.project-details-btn');

projectDetailsBtns.forEach((pdb) => {
  pdb.addEventListener('click', (event) => {
      let projectId = Number(event.target.getAttribute('data-project-id'));
      let projectToShow = projects.find(p => p.id === projectId);
      popupProject.style.display = "block";
      popupProject.style.opacity = 1;

      popupProject.querySelector('.popup-title').textContent = projectToShow.title;
      popupProject.querySelector('.popup-image').src = projectToShow.modalPicture;
      popupProject.querySelector('.popup-long-description').textContent = projectToShow.description;

      // Popup close
      let popupClose = document.querySelector('.popup-close');
      popupClose.addEventListener('click', () => { popupProject.style.opacity = 0; popupProject.style.display="none";});
  })
});