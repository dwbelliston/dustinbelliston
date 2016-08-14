import { Injectable } from '@angular/core';

export const CLIENTS = [
  {name: 'clientsuccess', img: 'assets/logo_clientsuccess.png', color: 'red', url: '', content: 'The man in the hill bro', viewMore: 'false'},
  {name: 'clientsuccess', img: '', color: 'red', url: '', content: 'The man in the hill bro', viewMore: 'false'},
  {name: 'clientsuccess', img: '', color: 'red', url: '', content: 'The man in the hill bro', viewMore: 'false'},
  {name: 'clientsuccess', img: '', color: 'red', url: '', content: 'The man in the hill bro', viewMore: 'false'},
  {name: 'clientsuccess', img: '', color: 'red', url: '', content: 'The man in the hill bro', viewMore: 'false'},
  {name: 'clientsuccess', img: '', color: 'red', url: '', content: 'The man in the hill bro', viewMore: 'false'},
  {name: 'clientsuccess', img: '', color: 'red', url: '', content: 'The man in the hill bro', viewMore: 'false'},
];


@Injectable()
export class DataService {
  constructor() {
    console.log('#--Dataservice--#');
  }

  getClients() {
    return CLIENTS;
  }
}

