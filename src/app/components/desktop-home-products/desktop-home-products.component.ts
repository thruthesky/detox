import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { PostSearchOptions, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-desktop-home-products',
  templateUrl: './desktop-home-products.component.html',
  styleUrls: ['./desktop-home-products.component.scss'],
})
export class DesktopHomeProductsComponent implements OnInit {
  @ViewChild('slides', { static: false }) slides: IonSlides;

  options = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 800,
  };

  posts: Posts;

  constructor(public a: AppService) {
    const req: PostSearchOptions = {
      category_name: 'products',
      posts_per_page: 8
    };
    this.a.wp.postSearch(req).subscribe(res => {
      console.log('res; ', res);
      this.posts = res;
    });

  }

  ngOnInit() { }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  onClick(x) {
    //console.log('x: ', x);
  }
}
