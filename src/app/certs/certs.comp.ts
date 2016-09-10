import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service'

@Component({
    selector: 'certs',
    template: require('./certs.comp.html'),
    styles: [require('./certs.comp.scss'), require('../../styles/main.scss')],
    directives: [],
    providers: [DataService],
})
export class CertsComponent implements OnInit {
    private certs: any;

    constructor(private dataService: DataService){
    }

    ngOnInit () {
        this.certs = this.dataService.getCerts();
    }
}
