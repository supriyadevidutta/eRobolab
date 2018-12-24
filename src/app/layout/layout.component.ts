import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() { }
  
  ngOnInit() {
    $(document).ready(function(){
      $(window).on("resize scroll", function() {
          if($("#about").offset().top > $(window).scrollTop()){
            $("#toTop").css({'display' : 'none'});
          }else{
            $("#toTop").css({'display' : 'inline'});
          }         
        });
    });
  }  
}
