import { Component, OnInit } from '@angular/core';
declare var $:any;
import * as priceInfo from '../data/pricing.json'; 

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  constructor() { }
  priceInfo: object;
  pricingContainerHeight: Number;
  ngOnInit() {
    this.priceInfo = priceInfo;
    $(document).ready(function(){
      // this.pricingContainerHeight = $(".owl-stage").height();
      // console.log(this.pricingContainerHeight);
      $('#pricing.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:false,
                loop:false
            }
        }
      })
      // setTimeout(() => {
      var owlHeight = $('#pricing.owl-carousel .owl-stage').height() - 50 +'px';
      $('.test-review').height(owlHeight);
      // console.log(owlHeight);
      // },0);
    })
    
  }
}
