import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Posts } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-desktop-home-testimonial',
  templateUrl: './desktop-home-testimonial.component.html',
  styleUrls: ['./desktop-home-testimonial.component.scss'],
})
export class DesktopHomeTestimonialComponent implements OnInit {

  posts: Posts = [];
  constructor(
    public a: AppService
  ) {
    a.wp.postSearch({ category_name: 'testimonial', posts_per_page: 4, photo: true }).subscribe(res => {
      this.posts = res;
      // console.log('res: ', res);
    }, e => this.a.error(e));
  }

  ngOnInit() { }

}
