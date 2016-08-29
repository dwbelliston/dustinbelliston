import { Injectable } from '@angular/core';

export const CLIENTS = [
  {name: `clientsuccess`, img: `work/logo_clientsuccess`,
    color: `#1ebaff`, url: `https://www.clientsuccess.com/`, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `simplecitizen`, img: `work/logo_simplecitizen`,
    color: `#246d5a`, url: `https://simplecitizen.com/`, viewMore: false,
    content: `Takes a user through application process for immigration forms. Think, turbo tax. Generates completed PDF.`
  },
  {name: `sendoutcards`, img: `work/logo_soc`,
    color: `#00BBC6`, url: `https://www.sendoutcards.com/catalog/`, viewMore: false,
    content: `Worked on a grid that showed the cards, pinterest style, and the user could select it, view it and then
    continue on to customize it. Custom sidenav popout for fitlering. Pinterest styled search input tags.`
  },
  {name: `sol`, img: `work/logo_sol`,
    color: `#F7AE35`, url: ``, viewMore: false,
    content: `Application for healthcare insurance. Angular frontend to collect user information. Django templating to generate
    the PDF.`
  },
  {name: `startstudio`, img: `work/logo_startstudio`,
    color: `#1D7BCB`, url: ``, viewMore: false,
    content: `Marketing site to promote a startup incubator. Simple, yet elegant.`
  },
  {name: `everyname`, img: `work/logo_everyname`,
    color: `#145284`, url: ``, viewMore: false,
    content: `Admin site to manage client information and create orders. Lots of models. Lots of fields. Many forms.`
  },
];

export const TECH = [
  {name: `angular`, img: `tech/angular`,
    color: `#E23137`, url: ``, viewMore: false, isCanvas: true, percent: '85',
    content: `80`
  },
  {name: `typescript`, img: `tech/typescript`,
    color: `#0078CF`, url: ``, viewMore: false, isCanvas: true, percent: '60',
    content: ``
  },
  {name: `css`, img: `tech/css`,
    color: `#25A8DE`, url: ``, viewMore: false, isCanvas: true, percent: '90',
    content: ``
  },
  {name: `python`, img: `tech/python`,
    color: `#FFD947`, url: ``, viewMore: false, isCanvas: true, percent: '60',
    content: ``
  },
  {name: `django`, img: `tech/django`,
    color: `#06311E`, url: ``, viewMore: false, isCanvas: true, percent: '50',
    content: ``
  },
  {name: `aws`, img: `tech/aws`,
    color: `#f99900`, url: ``, viewMore: false, isCanvas: true, percent: '70',
    content: ``
  },
  {name: `jquery`, img: `tech/jquery`,
    color: `#0466B0`, url: ``, viewMore: false, isCanvas: true, percent: '50',
    content: ``
  },
  {name: `firebase`, img: `tech/firebase`,
    color: `#f88300`, url: ``, viewMore: false, isCanvas: true, percent: '60',
    content: ``
  },
  {name: `postgres`, img: `tech/postgres`,
    color: `#2f6592`, url: ``, viewMore: false, isCanvas: true, percent: '70',
    content: ``
  },
];

export const EDUCATION = [
  {name: `byu`, img: `education/byu`,
    color: `#01275D`, url: ``, viewMore: false,
    content: `
      Masters Degree<br>
      Information Systems Management<br>
    `
  },
  {name: `front-end development`, img: false,
    color: `#246d5a`, url: ``, viewMore: false,
    content: `
      IS 403 - Programming Principles (Java, C#)<br>
      IS 413 - Enterprise Development (Python)<br>
      IS 542 - Modern Web (Angular, React, Polymer)<br>
      IS 537 - Data Structures<br>
      `
  },
  {name: `back-end development`, img: false,
    color: `#00BBC6`, url: ``, viewMore: false,
    content: `
      IS 402 - Database Systems (SQL)<br>
      IS 411 - Systems Design & Implementation (Diagrams)<br>
      IS 590 - Advanced Database Management (SQL, NoSql) <br>
    `
  },
  {name: `systems admin`, img: false,
    color: `#F7AE35`, url: ``, viewMore: false,
    content: `
      IS 404 - Data Comm (OSI Model)<br>
      IS 531 - Enterprise Infrastructure (ITIL, Cloud, Scripting)<br>
      IS 533 - Advanced Data Comm<br>
    `
  },
  {name: `business management`, img: false,
    color: `#1D7BCB`, url: ``, viewMore: false,
    content: `  
      BUSM 387 - Economics of Strategy<br>    
      BUSM 540 - OBHR<br>
      BUSM 582 - Managerial Ethics<br>
      MBA 672 - Entrepreneurial Marketing<br>
      Fundamentals of Finance, Accounting, Marketing, Statistics<br>
    `
  },
  {name: `security`, img: false,
    color: `#145284`, url: ``, viewMore: false,
    content: `
      IS 414 - Business Processes and Controls<br>    
      IS 560 - Information Security Management<br>
    `
  },
];

export const EMPLOYERS = [
  {name: `izeni`, img: `employer/izeni`,
    color: `black`, url: ``, viewMore: false,
    content: `Worked on web applications for well-funded start-ups. Example client had 2 million in funding. Development
    in Angular 1 & 2 integrated into Django REST APIs.`
  },
  {name: `fidelity`, img: `employer/fidelity`,
    color: `#398D00`, url: ``, viewMore: false,
    content: `Intern as software developer. Dove into Angular full on. Learned fundamentals of QA and BPMN 2.0.`
  },
  {name: `byu`, img: `employer/byumain`,
    color: `#01275D`, url: ``, viewMore: false,
    content: `Teacher and trainer for religious services. Led 3 hour instruction sessions everyday. Taught fundamentals in 
    developing relationships of trust, teaching concepts simply, and motivating change through commitments.`
  },
];

export const ABOUTME = [
  {name: `family`, img: `aboutme/family`,
    color: `#002B39`, url: ``, viewMore: false,
    content: `It's said Leonidas chose the 300 because of their wives and mothers. 
    The women would have to be strong when the nation looked to them after the 300 had fallen.
    My wife and the mother of our little girl is cooler than me by far.`
  },
  {name: `tacoma + bike = dream`, img: `aboutme/bike`,
    color: `#96BFF2`, url: ``, viewMore: false,
    content: `Someday. Its going to happen. I love riding bikes, prefer it over driving.
    My dream is to have a nice mountain bike and throw it in the back of a Tacoma. 
    I need both things.`
  },
  {name: `learning`, img: `aboutme/learning`,
    color: `#C53B34`, url: ``, viewMore: false,
    content: `School of Athens. Raphael 1510. Represents Philosophy. I don't know much about
    philosophy, but I think this image embodies the desire people have to
    expand their knowledge and seek understanding. Learning is cool and I like to read.`
  },
];


@Injectable()
export class DataService {
  constructor() {
  }

  getClients() {
    return CLIENTS;
  }
  getTech() {
    return TECH;
  }
  getEducation() {
    return EDUCATION;
  }
  getEmployers() {
    return EMPLOYERS;
  }
  getAboutme() {
    return ABOUTME;
  }
}
