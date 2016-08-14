import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import {LandingComponent} from './landing/landing.comp'

@Component({
  selector: 'app-comp',
  template: require('./app.comp.html'),
  styles: [require('../styles/main.scss'), require('./app.comp.scss')],
  directives: [LandingComponent],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent { }
