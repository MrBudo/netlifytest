import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shivansh Budakoti', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shivansh Budakoti',
  subtitle: 'I am Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile.png',
  paragraphOne:
    'Hi! I am doing Master of Software Engineering in University of Canberra and I am in my last Semester Now',
  paragraphTwo:
    'Through my three semster in the university I have been very active in taking part in different projects. Which gave me hands on experience in Web development and helped in building my skills. I am well versed with React, Javascript, html, css and node.js. ',
  paragraphThree:
    'I also have passion for graphic and motion design which has always helped me to make visually engaging website',
  resume: 'https://drive.google.com/file/d/1WzH_-_9pJeWuZdFGTsKdrptoktLUyk-e/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.jpg',
    title: 'NATIONAL ARBORETUM CANBERRA',
    info:
      'The National Arboretum Canberra (NAC) is the home to over 44,000 trees growing in 104 forests across 250 hectares.The manual process of soil mointoring was expensive, time consuming (over amonth to cover the entire area) and inefficient, resulting in significant tree loss and water management costs.',
    info2:
      'An IoT (Internet of Things) platform is designed for real time soil moisture and temperature monitoring. Its a Smartphone App to access real-time cloud based data. Data uploaded real-time to the cloud every six hour.',
    url: 'https://cbrdata.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'QPRC SMART CITY',
    info:
      'Worked in a team to Install 16 sensors throughout Queanbeyan, we used React frame work for front end. For backend we used node.js and hosted it using AWS cloud server ',
    info2:
      'The Aim of the government funded project was to collect data through out the city and visualize it in a really easy to understandable way',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'SMART CAMPUS UC-IOT',
    info:
      'The Idea is to put up multiple sensors throughout the Campus, collect the data and put it up on the website which can be accessible by anyone in the university.',
    info2:
      'We used React for the front end. Backend was done google in cloud firestore. The sensors including Particle modulator, Co2 sensor and GPS are planned to be added. ',
    url: 'http://uc-io.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ProjectP.png',
    title: 'GRAPHIC DESIGN PROJECTS',
    info:
      'Graphic designing has helped me in making my ideas become reality. Designing on the sides has helped me to understand color theory which has made me a better designer',
    info2:
      'The particular scene I made for a friend who needed a loopable scene for a lyrical video. Click to see my Behance',
    url: 'https://www.behance.net/shivanshis342d',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to Hire me? Awesome!',
  btn: '',
  email: 'shivanshisbudakoti@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shivansh-budakoti-622a19132/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MrBudo',
    },
    {
      id: nanoid(),
      name: 'behance',
      url: 'https://www.behance.net/shivanshis342d',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/mr_budo/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
