import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.comp';
import { ClientsComponent } from './clients/clients.comp';
import { TechsComponent } from './techs/techs.comp';
import { EducationComponent } from './education/education.comp';
import { EmployersComponent } from './employers/employers.comp';
import { AboutmeComponent } from './aboutme/aboutme.comp';
import { CardComponent } from './shared/card/card.comp';

import { DataService, RandomColorService } from './shared';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AppComponent, LandingComponent, ClientsComponent, EducationComponent,
    AboutmeComponent, EmployersComponent, CardComponent, TechsComponent],
  providers: [DataService, RandomColorService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
