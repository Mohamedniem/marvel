import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IntersectionObserverModule } from 'ngx-intersection-observer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { ManagersComponent } from './components/managers/managers.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { OurDevicesComponent } from './components/our-devices/our-devices.component';
import { IntersectionObserverConfig } from 'ngx-intersection-observer/lib/intersection-observer-config.model';
import { AboutMarvelComponent } from './components/about-marvel/about-marvel.component';



@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    OurProjectsComponent,
    ServicesComponent,
    AboutUsComponent,
    ManagersComponent,
    OurClientsComponent,
    OurDevicesComponent,
    AboutMarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    IntersectionObserverModule.forRoot({
      debounce: 50,
      threshold: 30,
      autoRemove: true
    } as IntersectionObserverConfig)   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
