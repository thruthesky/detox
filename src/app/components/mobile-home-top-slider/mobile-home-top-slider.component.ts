import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PostSearchOptions, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-mobile-home-top-slider',
  templateUrl: './mobile-home-top-slider.component.html',
  styleUrls: ['./mobile-home-top-slider.component.scss'],
})
export class MobileHomeTopSliderComponent implements OnInit, AfterViewInit {

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

  constructor(public a: AppService) {
    const req: PostSearchOptions = {
      category_name: 'main-top-banner'
    };
    this.a.wp.postSearch(req).subscribe(res => {
      console.log('res; ', res);
      this.posts = res;

    });
  }

  ngOnInit() { }


  ngAfterViewInit() {
 
  }


}
