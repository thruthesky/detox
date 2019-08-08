import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { PostSearchOptions, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';



@Component({
  selector: 'app-desktop-home-top-slider',
  templateUrl: './desktop-home-top-slider.component.html',
  styleUrls: ['./desktop-home-top-slider.component.scss'],
})
export class DesktopHomeTopSliderComponent implements OnInit {
  @ViewChild('slides', { static: false }) slides: IonSlides;







  options = {
    initialSlide: 1,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  
  };

  posts: Posts;
  constructor(
    public a: AppService
  ) {
    const req: PostSearchOptions = {
      category_name: 'main-top-banner'
    };
    this.a.wp.postSearch(req).subscribe(res => {
      console.log('res; ', res);
      this.posts = res;

    });
  }

  ngOnInit() {


  }



  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }


}
