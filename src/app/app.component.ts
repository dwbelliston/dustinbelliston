import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp',
  template: require('./app.comp.html'),
  styles: [require('../styles/main.scss'), require('./app.comp.scss')],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private showAll: boolean;
  constructor() {}

  toggleAll() {
    this.showAll = !this.showAll;
  }
}
