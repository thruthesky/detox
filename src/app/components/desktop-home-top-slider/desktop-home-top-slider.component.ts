import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-desktop-home-top-slider',
  templateUrl: './desktop-home-top-slider.component.html',
  styleUrls: ['./desktop-home-top-slider.component.scss'],
})
export class DesktopHomeTopSliderComponent implements OnInit {
  @ViewChild('slides') slides: IonSlides;

  options = {
    initialSlide: 3 ,
    speed: 400,
    loop: true,
  };
  // moving = false;
  constructor() { }

  ngOnInit() {
    // this.slides.ionSlideTransitionStart.subscribe(res => {
    //   this.moving = true;
    //   console.log('transition start');
    // });
    // this.slides.ionSlideTransitionEnd.subscribe(res => {
    //   this.moving = false;
    //   console.log('transition ended');
    // });

    // this.slides.ionSlideDrag.subscribe(res => {
    //   this.moving = true;
    //   console.log('drag event');
    // });

    // this.slides.ionSlideTouchStart.subscribe( () => this.moving = true );
    // this.slides.ionSlideTouchEnd.subscribe( () => this.moving = false );
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
}
