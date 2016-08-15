import { Component, ViewEncapsulation } from '@angular/core';

import { LandingComponent } from './landing/landing.comp'
import { ClientsComponent } from './clients/clients.comp'
import { CardComponent } from './shared/card/card.comp'

import { DataService } from './shared/data.service'

@Component({
  selector: 'app-comp',
  template: require('./app.comp.html'),
  styles: [require('../styles/main.scss'), require('./app.comp.scss')],
  providers: [DataService],
  directives: [LandingComponent, ClientsComponent, CardComponent],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor() {}
}
