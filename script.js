const menuBar = document.getElementById('menu-bar');
const mobileMenu = document.getElementById('mobile-menu');
const closeButton = document.getElementById('close');

menuBar.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

const speakers = [
  {
    id: 0,
    name: 'Rehgan Avon',
    position: 'Founder, Women in Analytics',
    info: 'Rehgan Avon is the Product Manager at Open Data Group. She has a Bachelor’s Degree in Industrial and Systems Engineering specializing in Data Analytics and has taught Introduction to Data Science courses to MBA students across the US.',
    image: 'images/speakers/Rehgan_Avon.jpeg',
  },
  {
    id: 1,
    name: 'Feryal Ozel',
    position: 'Professor, Astronomy & Astrophysics Department of Astronomy University of Arizona',
    info: 'Dr. Özel made the first predictions of the images of nearby supermassive black holes at different wavelengths based on her work on accretion flows, which guided the development of the Event Horizon Telescope.',
    image: 'images/speakers/feryal-ozel.jpg',
  },
  {
    id: 2,
    name: 'Janette Vinciguerra',
    position: 'Director and Chief of Staff, Dealerweb',
    info: 'Janette manages and develops key strategic initiatives, including the transformation of the technology department to drive efficiency and reduce time to market through the use of automation and agile development, and project life cycle techniques.',
    image: 'images/speakers/Janette_Vinciguerra.jpeg',
  },
  {
    id: 3,
    name: 'Ingy Youssef',
    position: 'API Security, JPMorgan Chase',
    info: 'Information Security Architect, digital transformation leader, researcher and guru-ess. Ingy Youssef is an engineer at heart with a defender mission.',
    image: 'images/speakers/Ingy_Youssef.jpg',
  },
  {
    id: 4,
    name: 'Carol Willing',
    position: 'VP Learning, Noteable',
    info: 'Carol Naslund Willing serves on Project Jupyter’s Steering Council and works as a Core Developer on JupyterHub and mybinder.org. She serves as a co-editor of The Journal of Open Source Education (JOSE) and co-authored an open source book, Teaching and Learning with Jupyter.',
    image: 'images/speakers/carol-willing.jpg',
  },
  {
    id: 5,
    name: 'Noelle Silver',
    position: 'Founder, AI Leadership Institute',
    info: 'Noelle is a multi-award-winning technologist who specializes in conversational AI and Voice Technology, Intelligent Apps and Agents, and Responsible AI Practices. She has lead teams at NPR, Microsoft, and Amazon, and is the Founder of #Lovefluencers and the AI Leadership Institute.',
    image: 'images/speakers/Noelle_Silver.jpg',
  },
];

const speakerList = document.getElementById('speaker-list');
const speakerCount = 4;

function speakerMaker(num) {
  return speakers.filter((sp) => sp.id < num).map((speaker) => `
                          <li>
                          <img src="${speaker.image}" class="speaker-avatar" alt="${speaker.name}">
                          <div class="speaker">
                            <h3>${speaker.name}</h3>
                            <span class="speaker-position">
                            ${speaker.position}
                            </span>
                            <div class="silver-underline"></div>
                            <p class="speaker-info">${speaker.info}</p>
                          </div>
                        </li>`).join('');
}
if (!document.location.href.includes('about.html')) {
  const speakerHTML = speakerMaker(speakerCount);
  speakerList.innerHTML = speakerHTML;
  const moreButton = document.getElementById('more-btn');
  moreButton.addEventListener('click', () => {
    speakerList.innerHTML = speakerMaker(speakers.length);
    moreButton.style.display = 'none';
  });
}
