import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navchangecolor=false;

  @HostListener("document:scroll")
  checkScroll() {
    if (window.scrollY > 800) {
      this.navchangecolor=true;
    }else{
      this.navchangecolor=false;
    }
  }

}
