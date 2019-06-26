import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-home-top-slider',
  templateUrl: './mobile-home-top-slider.component.html',
  styleUrls: ['./mobile-home-top-slider.component.scss'],
})
export class MobileHomeTopSliderComponent implements OnInit {

  options = {
    initialSlide: 3 ,
    speed: 400,
    loop: true,
  };
  constructor() { }

  ngOnInit() {}

}
