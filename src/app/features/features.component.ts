import { Component, OnInit } from '@angular/core';
import * as features from '../data/features.json';
declare let $: any;

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: Object;
  constructor() { }

  ngOnInit() {
    this.features = features;
    $(document).ready(function(){
      $('#features.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        center: false,
        responsiveClass:true,
        nav:false,
        responsive:{
          0:{
            items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
        }
      })
      var owlHeight = $('#features.owl-carousel .owl-stage').height() +'px';
      $('.agileits_service_grid_btm_left1').height(owlHeight);
    });
  }
}
