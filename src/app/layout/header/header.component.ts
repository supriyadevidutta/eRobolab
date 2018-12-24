import { Component, OnInit, Injectable } from '@angular/core';
import * as homeDetails from '../../data/home.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  height = (screen.height - 32) + 'px';
  homeDetails: Object;

  constructor() { }

  ngOnInit() {
    this.homeDetails = homeDetails; 
    if(window.innerWidth < 400){
      this.height = '600px';
    }
  }

}
