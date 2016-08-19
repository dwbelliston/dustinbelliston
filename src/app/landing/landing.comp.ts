import { Component, OnInit, ViewEncapsulation, Renderer } from '@angular/core';

import { RandomColorService } from '../shared/random-color.service'

@Component({
    selector: 'landing',
    template: require('./landing.comp.html'),
    styles: [require('./landing.comp.scss'), require('../../styles/main.scss')],
    providers: [RandomColorService]
})
export class LandingComponent implements OnInit {
    private heroElm: any;

    constructor(private renderer : Renderer, private randomColor: RandomColorService){
    }

    ngOnInit () {
    }

    ngAfterContentInit () {
    }

    ngAfterViewInit () {
        this.heroElm = document.getElementById('mainHero');
        this.renderer.listenGlobal( 'window' , 'scroll' , (e : any) => {
            this.onScroll(e);
        });

        setInterval(()=>{
            this.heroElm.style.color = this.randomColor.getRandom();
        }, 1000);
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