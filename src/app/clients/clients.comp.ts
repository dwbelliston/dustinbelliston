import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service'

@Component({
    selector: 'clients',
    template: require('./clients.comp.html'),
    styles: [require('./clients.comp.scss'), require('../../styles/main.scss')],
    providers: [DataService],
})
export class ClientsComponent implements OnInit {
    private clients: any;

    constructor(private dataService: DataService){
    }

    ngOnInit () {
        this.clients = this.dataService.getClients();
    }

    ngAfterContentInit () {
    }

    randomTranslate() {
        let x:string, xDir:string, y:string, yDir:string;

        x = Math.random() < 0.5 ? '0%' : '100%';
        y = x === `0%` ? `100%` : Math.random() < 0.5 ? '0%' : '100%';

        xDir = Math.random() < 0.5 ? '-' : '';
        yDir = Math.random() < 0.5 ? '-' : '';

        return `translate(${xDir + x}, ${yDir + y})`;
    }
}