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
    private s1: any;
    private s2: any;
    private s3: any;

    constructor(private renderer : Renderer, private randomColor: RandomColorService){
    }

    ngOnInit () {
    }

    ngAfterContentInit () {
    }

    ngAfterViewInit () {
        this.heroElm = document.getElementById('mainHero');
        this.s1 = document.getElementById('s1');
        this.s2 = document.getElementById('s2');
        this.s3 = document.getElementById('s3');

        this.renderer.listenGlobal( 'window' , 'scroll' , (e : any) => {
            this.onScroll(e);
        });

        setInterval(()=>{
            // this.heroElm.style.color = this.randomColor.getRandom();
            this.s1.style.background = this.randomColor.getRandom();
            this.s2.style.background = this.randomColor.getRandom();
            this.s3.style.background = this.randomColor.getRandom();
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