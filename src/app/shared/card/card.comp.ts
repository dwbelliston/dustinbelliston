import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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

  constructor(){
  }

  ngOnInit () {
    if (this.data.img) this.imageSrc = require(`../../../assets/${this.data.img}.png`);
    this.translateStyle = this.randomTranslate();
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