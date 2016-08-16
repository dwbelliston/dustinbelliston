import { Injectable } from '@angular/core';

export const CLIENTS = [
  {name: 'clientsuccess', img: 'work/logo_clientsuccess',
    color: '#1ebaff', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'simplecitizen', img: 'work/logo_simplecitizen',
    color: '#246d5a', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
  },
  {name: 'sendoutcards', img: 'work/logo_soc',
    color: '#00BBC6', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'sol', img: 'work/logo_sol',
    color: '#F7AE35', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'startstudio', img: 'work/logo_startstudio',
    color: '#1D7BCB', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'everyname', img: 'work/logo_everyname',
    color: '#145284', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
];

export const TECH = [
  {name: 'angular', img: 'tech/angular',
    color: '#E23137', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'typescript', img: 'tech/typescript',
    color: '#0078CF', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
  },
  {name: 'css', img: 'tech/css',
    color: '#25A8DE', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'python', img: 'tech/python',
    color: '#FFD947', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'django', img: 'tech/django',
    color: '#06311E', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'jquery', img: 'tech/jquery',
    color: '#0466B0', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'aws', img: 'tech/aws',
    color: '#f99900', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'firebase', img: 'tech/firebase',
    color: '#f88300', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'postgres', img: 'tech/postgres',
    color: '#2f6592', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
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
}
