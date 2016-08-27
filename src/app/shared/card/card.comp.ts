import { Component, OnInit, Input,
  ViewEncapsulation, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'card',
  template: require('./card.comp.html'),
  styles: [require('../../../styles/main.scss'), require('./card.comp.scss')],
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Input() data: any;
  private translateStyle: string;
  private imageSrc: string;
  private cardId: string;
  private canvasId: string;

  constructor(private renderer : Renderer){
  }

  ngOnInit () {
    if (this.data.img) this.imageSrc = require(`../../../assets/${this.data.img}.png`);
    this.cardId = `${this.data.img}-${Math.random()}`;
    this.canvasId = `canvas-${this.data.img}-${Math.random()}`;
    this.translateStyle = this.randomTranslate();
  }

  ngAfterContentInit () {
  }

  ngAfterViewInit () {
    this.renderer.listenGlobal( 'window' , 'scroll' , (e : any) => {
      this.onScroll(e);
    });

    var canvas = document.getElementById(this.canvasId);
    //https://jsfiddle.net/nvarun123/yn1bhj2a/4/
    console.log(canvas)
    // var ctx = canvas.getContext("2d");
    // console.log(ctx)

  }

  onScroll(e: any) {
    requestAnimationFrame(this.catchScroll.bind(this))
  }

  catchScroll() {
    let elm = document.getElementById(this.cardId);
    let triggerStep = window.innerHeight - window.innerHeight/4;
    if(elm.getBoundingClientRect().top > triggerStep) {
      elm.style.opacity = '0';
    } else {
      elm.style.opacity = '1';
    }
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