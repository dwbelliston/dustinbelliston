import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service'

@Component({
    selector: 'employers',
    template: require('./employers.comp.html'),
    styles: [require('./employers.comp.scss'), require('../../styles/main.scss')],
    directives: [],
    providers: [DataService],
})
export class EmployersComponent implements OnInit {
    private employers: any;

    constructor(private dataService: DataService){
    }

    ngOnInit () {
        this.employers = this.dataService.getEmployers();
    }
}