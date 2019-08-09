import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Posts, PostSearchOptions } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-mobile-home-products',
  templateUrl: './mobile-home-products.component.html',
  styleUrls: ['./mobile-home-products.component.scss'],
})
export class MobileHomeProductsComponent implements OnInit {


  options = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 800,
    centeredSlides: true,
  };

  posts: Posts;

  constructor(
    public a: AppService
  ) {
    const req: PostSearchOptions = {
      category_name: 'products',
      posts_per_page: 8
    };
    this.a.wp.postSearch(req).subscribe(res => {
      // console.log('res; ', res);
      this.posts = res;
    });
   }

  ngOnInit() {}

}


