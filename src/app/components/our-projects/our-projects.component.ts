
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'





@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css'],
  
})
export class OurProjectsComponent implements OnInit{


  ngOnInit(): void {
    AOS.init( );
  }
 
  
   
  }

