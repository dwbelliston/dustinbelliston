import { Injectable } from '@angular/core';

export const CLIENTS = [
  {name: 'clientsuccess', img: 'logo_clientsuccess',
    color: '#22A5DE', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'simplecitizen', img: 'logo_simplecitizen',
    color: 'red', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
  },
  {name: 'clientsuccess', img: 'logo_clientsuccess',
    color: 'green', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'simplecitizen', img: 'logo_clientsuccess',
    color: 'orange', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
  },
  {name: 'clientsuccess', img: 'logo_clientsuccess',
    color: '#22A5DE', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'simplecitizen', img: 'logo_clientsuccess',
    color: '#246D5A', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
  },
  {name: 'clientsuccess', img: 'logo_clientsuccess',
    color: '#22A5DE', url: '', viewMore: 'false',
    content: 'Interactive grid that displays a company’s clients and information about them. Custom filtering and action items.'
  },
  {name: 'simplecitizen', img: 'logo_clientsuccess',
    color: '#246D5A', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
  },
  {name: 'simplecitizen', img: 'logo_clientsuccess',
    color: '#246D5A', url: '', viewMore: 'false',
    content: 'Takes a user through application process for immigration forms. Think, turbo tax. Generates compelted PDF.'
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
