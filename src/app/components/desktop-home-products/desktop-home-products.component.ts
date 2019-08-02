import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-desktop-home-products',
  templateUrl: './desktop-home-products.component.html',
  styleUrls: ['./desktop-home-products.component.scss'],
})
export class DesktopHomeProductsComponent implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  options = {
    initialSlide: 3,
    slidesPerView: 3,
    speed: 400,
    loop: true,
  };

  constructor() { }

  ngOnInit() { }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  onClick(x) {
    console.log('x: ', x);
  }
}
