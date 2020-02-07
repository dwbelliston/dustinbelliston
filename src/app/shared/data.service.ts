import { Injectable } from '@angular/core';

export const CLIENTS = [
  {name: `benefitsculptor`, img: `work/logo_benefit`,
    color: `#ff7d00`, url: `https://benefitsculptor.com/`, viewMore: false,
    content: `Worked closely with founder to build a platform for quoting small group insurance.`
  },
  {name: `ancestry`, img: `work/logo_ancestry`,
    color: `#9cbe30`, url: `https://www.ancestry.com/`, viewMore: false,
    content: `Helped with their migration to cloud as an AWS consultant. Short engagement.`
  },
  {name: `1strategy`, img: `work/logo_one`,
    color: `#2ebfeb`, url: `http://www.1strategy.com/`, viewMore: false,
    content: `Have worked with this team a bit.`
  },
  {name: `clientsuccess`, img: `work/logo_clientsuccess`,
    color: `#1ebaff`, url: `https://www.clientsuccess.com/`, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `simplecitizen`, img: `work/logo_simplecitizen`,
    color: `#246d5a`, url: `https://simplecitizen.com/`, viewMore: false,
    content: `Takes a user through application process for immigration forms. Think, TurboTax. Generates completed PDF.`
  },
  {name: `sendoutcards`, img: `work/logo_soc`,
    color: `#00BBC6`, url: `https://www.sendoutcards.com/catalog/`, viewMore: false,
    content: `Pinterest style grid of greeting cards. User can select card, view it and then
    continue on to customize it. Created a custom sidenav popout for filtering.`
  },
  {name: `sol`, img: `work/logo_sol`,
    color: `#F7AE35`, url: `https://sol-staging.izeni.net/application`, viewMore: false,
    content: `Application for healthcare insurance. Angular frontend to collect user information. Django templating to generate
    the PDF.`
  },
  {name: `startstudio`, img: `work/logo_startstudio`,
    color: `#1D7BCB`, url: `https://www.startstudio.com/`, viewMore: false,
    content: `Marketing site to promote a startup incubator. Simple, yet elegant.`
  },
  {name: `everyname`, img: `work/logo_everyname`,
    color: `#145284`, url: `https://everyname.com/`, viewMore: false,
    content: `Admin site to manage client information and create orders. Lots of models. Lots of fields. Many forms.`
  },
];

export const CERTS = [
  {name: `aws sa pro`, img: `certs/aws-sa-pro`,
    color: `#f99900`, url: ``, viewMore: false,
    content: `professional level`
  },
  {name: `aws developer`, img: `certs/aws-developer-ac`,
    color: `#f99900`, url: ``, viewMore: false,
    content: `associate level`
  },
  {name: `aws solutions architect`, img: `certs/aws-solutions-ac`,
    color: `#f99900`, url: ``, viewMore: false,
    content: `associate level`
  }
];

export const TECH = [
  {name: `angular`, img: `tech/angular`,
    color: `#E23137`, url: ``, viewMore: false, isCanvas: true, percent: '99',
    content: `80`
  },
  {name: `typescript`, img: `tech/typescript`,
    color: `#0078CF`, url: ``, viewMore: false, isCanvas: true, percent: '95',
    content: ``
  },
  {name: `css`, img: `tech/css`,
    color: `#25A8DE`, url: ``, viewMore: false, isCanvas: true, percent: '99',
    content: ``
  },
  {name: `python`, img: `tech/python`,
    color: `#FFD947`, url: ``, viewMore: false, isCanvas: true, percent: '89',
    content: ``
  },
  {name: `django`, img: `tech/django`,
    color: `#06311E`, url: ``, viewMore: false, isCanvas: true, percent: '89',
    content: ``
  },
  {name: `aws`, img: `tech/aws`,
    color: `#f99900`, url: ``, viewMore: false, isCanvas: true, percent: '98',
    content: ``
  },
  {name: `jquery`, img: `tech/jquery`,
    color: `#0466B0`, url: ``, viewMore: false, isCanvas: true, percent: '73',
    content: ``
  },
  {name: `firebase`, img: `tech/firebase`,
    color: `#f88300`, url: ``, viewMore: false, isCanvas: true, percent: '84',
    content: ``
  },
  {name: `postgres`, img: `tech/postgres`,
    color: `#2f6592`, url: ``, viewMore: false, isCanvas: true, percent: '92',
    content: ``
  },
  {name: `terraform`, img: `tech/terraform`,
    color: `#5c4ee5`, url: ``, viewMore: false, isCanvas: true, percent: '70',
    content: ``
  },
];

export const EDUCATION = [
  {name: `byu`, img: `education/byu`,
    color: `#01275D`, url: ``, viewMore: false,
    content: `
      <p class="line"><span class="line__bold">Masters Degree</span></p>
      <p class="line">Information Systems Management</p>
      <p class="line">Graduation: April 2017</p>
    `
  },
  {name: `front-end development`, img: false,
    color: `#246d5a`, url: ``, viewMore: false,
    content: `
      <p class="line"><span class="line__item">IS 403</span> - Programming Principles (Java, C#)</p>
      <p class="line"><span class="line__item">IS 413</span> - Enterprise Development (Python)</p>
      <p class="line"><span class="line__item">IS 542</span> - Modern Web (Angular, React, Polymer)</p>
      <p class="line"><span class="line__item">IS 537</span> - Data Structures</p>
      `
  },
  {name: `back-end development`, img: false,
    color: `#00BBC6`, url: ``, viewMore: false,
    content: `
      <p class="line"><span class="line__item">IS 402</span> - Database Systems (SQL)</p>
      <p class="line"><span class="line__item">IS 411</span> - Systems Design & Implementation (SCRUM, Diagramming)</p>
      <p class="line"><span class="line__item">IS 590</span> - Advanced Database Management (SQL, NoSql) </p>
    `
  },
  {name: `systems admin`, img: false,
    color: `#F7AE35`, url: ``, viewMore: false,
    content: `
      <p class="line"><span class="line__item">IS 404</span> - Data Comm (OSI Model, PowerShell)</p>
      <p class="line"><span class="line__item">IS 531</span> - Enterprise Infrastructure (ITIL, Cloud, Storage, Scripting)</p>
      <p class="line"><span class="line__item">IS 533</span> - Advanced Data Comm</p>
    `
  },
  {name: `business management`, img: false,
    color: `#1D7BCB`, url: ``, viewMore: false,
    content: `
      <p class="line"><span class="line__item">BUSM 387</span>- Economics of Strategy</p>
      <p class="line"><span class="line__item">BUSM 540</span>- OBHR</p>
      <p class="line"><span class="line__item">BUSM 582</span>- Managerial Ethics</p>
      <p class="line"><span class="line__item">MBA 672</span>- Entrepreneurial Marketing</p>
      Fundamentals of Finance, Accounting, Marketing, Statistics<br>
    `
  },
  {name: `security`, img: false,
    color: `#145284`, url: ``, viewMore: false,
    content: `
      <p class="line"><span class="line__item">IS 414</span> - Business Processes and Controls</p>
      <p class="line"><span class="line__item">IS 560</span> - Information Security Management</p>
    `
  },
];

export const EMPLOYERS = [
  {name: `capital one`, img: `employer/capitalone`,
    color: `#d12e32`, url: `https://www.capitalone.com/`, viewMore: false,
    content: `Continuing to do frontend work (angular, redux). More AWS. I am a Code 'Chauffeur'. CI/CD. Jenkins.`
  },
  {name: `currentclient`, img: `employer/currentclient`,
    color: `#ff7d00`, url: `https://currentclient.com/`, viewMore: false,
    content: `First go with a startup. Led the development of a webapp that is a mashup of Qualtrics, Mailchimp, and a tiny CRM. Working with Beta customers. Still churning.`
  },
  {name: `1099`, img: `employer/1099`,
    color: `#f1c40f`, url: ``, viewMore: false,
    content: `For hire! When I have capacity, I am always excited about a fresh project. Happy to talk.`
  },
  {name: `izeni`, img: `employer/izeni`,
    color: `#0167f7`, url: `https://startstudio.com/`, viewMore: false,
    content: `Worked on web applications for well-funded start-ups. Example client had 2 million in funding. Development
    in Angular 1 & 2 integrated into Django REST APIs.`
  },
  {name: `fidelity`, img: `employer/fidelity`,
    color: `#398D00`, url: ``, viewMore: false,
    content: `Software developer itern. Built a web application to assist in QA processes. Learned fundamentals of QA and BPMN 2.0.`
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
    content: `It's said Leonidas chose the 300 Spartans because of their wives and mothers.
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
    content: `When I’m not programming, you can usually find me reading a book, listening to a podcast, or researching something online. Learning goes beyond formal education and I believe it’s important to always seek greater knowledge and understanding.`
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
  getCerts() {
    return CERTS;
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
