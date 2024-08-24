import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 0,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class ServicesComponent {


  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
 
  
}
