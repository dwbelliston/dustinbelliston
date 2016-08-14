import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'landing',
    template: require('./landing.comp.html'),
    styles: [require('./landing.comp.scss'), require('../../styles/main.scss')]
})
export class LandingComponent implements OnInit {

    constructor(){
    }

    ngOnInit () {
        // console.log('#--Init--#');
    }

    ngAfterContentInit () {
    }



}