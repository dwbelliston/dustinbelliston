import { Component, OnInit, Input,
  ViewEncapsulation, Renderer } from '@angular/core';

@Component({
  selector: 'card',
  template: require('./card.comp.html'),
  styles: [require('../../../styles/main.scss'), require('./card.comp.scss')],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Input() data: any;
  private translateStyle: string;
  private imageSrc: string;
  private cardId: string;
  private canvasId: string;
  private context: CanvasRenderingContext2D;

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

    // DOCS: http://stackoverflow.com/questions/13669404/typescript-problems-with-type-system
    // DOCS: http://stackoverflow.com/questions/32115328/type-canvasrenderingcontext2d-webglrenderingcontext-is-not-assignable-to-typ
    if (this.data.isCanvas) {
      let canvas = <HTMLCanvasElement> document.getElementById(this.canvasId);
      this.context = canvas.getContext("2d");
      this.catchContext(this.context);
    }

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

  catchContext(ctx:CanvasRenderingContext2D) {
    let PI=Math.PI;

    let percentCalc = Math.abs((this.data.percent/100) * 2);
    // Get difference if started at 0
    percentCalc = 2 - percentCalc;
    // Apply that to the new start point, need to (-) if draw clockwise
    percentCalc = 1.5 + percentCalc;

    //x, y, radius, start, stop, anti-clockwise
    ctx.arc(100, 100, 85, 1.5*PI, percentCalc * PI, true);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 15;
    ctx.stroke();

    let texter = this.data.percent + '%';
    ctx.font="50px Monospace";
    ctx.fillStyle='white';
    ctx.textAlign='center';
    ctx.textBaseline='bottom';
    ctx.fillText(texter, 100, 125, 100);
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
