import { v4 as uuidv4 } from 'uuid';

import pr1 from './../img/projects/stellar-burgers.jpg';
import pr1Big from './../img/projects/stellar-burgers-big.jpg';

import pr2 from './../img/projects/larek.jpg';
import pr2Big from './../img/projects/larek-big.jpg';

import pr3 from './../img/projects/qr.jpg';
import pr3Big from './../img/projects/qr-big.jpg';

import pr4 from './../img/projects/blog.jpg';
import pr4Big from './../img/projects/blog-big.jpg';

import pr5 from './../img/projects/mesto.jpg';
import pr5Big from './../img/projects/mesto-big.jpg';

import pr6 from './../img/projects/okno.jpg';
import pr6Big from './../img/projects/okno-big.jpg';

const projects = [
  {
    id: uuidv4(),
    title: 'Сервис бронирования еды',
    skills: 'HTML, CSS Modules, TypeScript, React, Redux',
    img: pr1,
    imgBig: pr1Big,
    ghUrl: 'https://github.com/elizavetaa0/stellar-burgers',
  },
  {
    id: uuidv4(),
    title: 'WEB-ларёк',
    skills: 'HTML, SCSS, JavaScript, TypeScript',
    img: pr2,
    imgBig: pr2Big,
    ghUrl: 'https://github.com/elizavetaa0/web-larek-frontend',
  },
  {
    id: uuidv4(),
    title: 'QR-код генератор',
    skills: 'HTML, CSS, JavaScript',
    img: pr3,
    imgBig: pr3Big,
    ghUrl: 'https://github.com/elizavetaa0/QR-code-generator',
  },
  {
    id: uuidv4(),
    title: 'Кастомизатор блога',
    skills: 'SCSS, JavaScript, TypeScript',
    img: pr4,
    imgBig: pr4Big,
    ghUrl: 'https://github.com/elizavetaa0/blog-customizer',
  },
  {
    id: uuidv4(),
    title: 'Mesto',
    skills: 'HTML, CSS, JavaScript',
    img: pr5,
    imgBig: pr5Big,
    ghUrl: 'https://github.com/elizavetaa0/mesto-project-ff',
  },
  {
    id: uuidv4(),
    title: 'Посмотри в окно',
    skills: 'HTML, CSS, JavaScript',
    img: pr6,
    imgBig: pr6Big,
    ghUrl: 'https://github.com/elizavetaa0/posmotri_v_okno',
  }
];

export { projects };
