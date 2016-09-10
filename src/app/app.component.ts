import { Component, ViewEncapsulation } from '@angular/core';

import { LandingComponent } from './landing/landing.comp'
import { ClientsComponent } from './clients/clients.comp'
import { CertsComponent } from './certs/certs.comp'
import { TechsComponent } from './techs/techs.comp'
import { EducationComponent } from './education/education.comp'
import { EmployersComponent } from './employers/employers.comp'
import { AboutmeComponent } from './aboutme/aboutme.comp'
import { CardComponent } from './shared/card/card.comp'

import { DataService } from './shared/data.service'
import { RandomColorService } from './shared/random-color.service'

@Component({
  selector: 'app-comp',
  template: require('./app.comp.html'),
  styles: [require('../styles/main.scss'), require('./app.comp.scss')],
  providers: [DataService, RandomColorService],
  directives: [LandingComponent, ClientsComponent, EducationComponent,
    CertsComponent, AboutmeComponent, EmployersComponent, CardComponent,
    TechsComponent],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private showAll: boolean;
  constructor() {}

  toggleAll() {
    this.showAll = !this.showAll;
  }
}
