import { Component, OnInit } from '@angular/core';
import * as businessDetails from '../data/business.json';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessDetails: Object;

  constructor() { }

  ngOnInit() {
    this.businessDetails = businessDetails;
  }

}
