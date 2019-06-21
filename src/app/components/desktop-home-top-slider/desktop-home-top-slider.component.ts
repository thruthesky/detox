import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-desktop-home-top-slider',
  templateUrl: './desktop-home-top-slider.component.html',
  styleUrls: ['./desktop-home-top-slider.component.scss'],
})
export class DesktopHomeTopSliderComponent implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  constructor() { }

  ngOnInit() {}
  
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
}
