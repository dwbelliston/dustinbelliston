import { Injectable } from '@angular/core';

export const CLIENTS = [
  {name: 'clientsuccess', img: 'a',
    color: '#5a1f33', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'simplecitizen', img: 'a',
    color: 'rgb(220, 186, 125)', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
  },
  {name: 'clientsuccess', img: 'a',
    color: 'rgb(220, 186, 125)', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'clientsuccess', img: 'a',
    color: '#5a1f33', url: '', viewMore: 'false',
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
}
