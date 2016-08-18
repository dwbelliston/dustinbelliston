import { Injectable } from '@angular/core';

export const CLIENTS = [
  {name: `clientsuccess`, img: `work/logo_clientsuccess`,
    color: `#1ebaff`, url: `https://www.clientsuccess.com/`, viewMore: true,
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
    color: `#E23137`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `typescript`, img: `tech/typescript`,
    color: `#0078CF`, url: ``, viewMore: false,
    content: `Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.`
  },
  {name: `css`, img: `tech/css`,
    color: `#25A8DE`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `python`, img: `tech/python`,
    color: `#FFD947`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `django`, img: `tech/django`,
    color: `#06311E`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `aws`, img: `tech/aws`,
    color: `#f99900`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `jquery`, img: `tech/jquery`,
    color: `#0466B0`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `firebase`, img: `tech/firebase`,
    color: `#f88300`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `postgres`, img: `tech/postgres`,
    color: `#2f6592`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
];

export const EDUCATION = [
  {name: `byu`, img: `education/byu`,
    color: `#01275D`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `front-end development`, img: false,
    color: `#246d5a`, url: ``, viewMore: false,
    content: `Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.`
  },
  {name: `back-end development`, img: false,
    color: `#00BBC6`, url: ``, viewMore: true,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `systems admin`, img: false,
    color: `#F7AE35`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `business management`, img: false,
    color: `#1D7BCB`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `security`, img: false,
    color: `#145284`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
];

export const EMPLOYERS = [
  {name: `izeni`, img: `employer/izeni`,
    color: `black`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
  },
  {name: `fidelity`, img: `employer/fidelity`,
    color: `#398D00`, url: ``, viewMore: false,
    content: `Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.`
  },
  {name: `byu`, img: `employer/byumain`,
    color: `#01275D`, url: ``, viewMore: false,
    content: `Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.`
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
    My dream is to have a nice mountain bike and throw it in the back of my Tacoma. 
    I need both things.`
  },
  {name: `learning`, img: `aboutme/learning`,
    color: `#C53B34`, url: ``, viewMore: false,
    content: `School of Athens. Raphael 1510. Represents Philosophy. I don't know much about
    philosophy per se, but I think this image embodies the desire for the human person to
    expand their knowledge and seek understanding. Learning is cool. I read. Alot.`
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
