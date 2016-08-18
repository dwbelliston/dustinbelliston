import { Component, OnInit, ViewEncapsulation, Renderer } from '@angular/core';


@Component({
    selector: 'landing',
    template: require('./landing.comp.html'),
    styles: [require('./landing.comp.scss'), require('../../styles/main.scss')]
})
export class LandingComponent implements OnInit {

    constructor(private renderer : Renderer){
    }

    ngOnInit () {
        // console.log('#--Init--#');
    }

    ngAfterContentInit () {
    }

    ngAfterViewInit () {
        this.renderer.listenGlobal( 'window' , 'scroll' , (e : any) => {
            this.onScroll(e);
        });
    }

    onScroll(e: any) {
        let elmLanding = document.getElementById('landing');
        let landingMidway = elmLanding.offsetHeight/2;

        let elmNav = document.getElementById('nav');

        if(elmLanding.getBoundingClientRect().bottom < landingMidway) {
            elmNav.style.opacity = '1';
        } else {
            elmNav.style.opacity = '0';
        }
    }


}