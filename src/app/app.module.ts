import { MatCardModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }