import { Component, OnInit } from '@angular/core';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-about-toxic',
  templateUrl: './about-toxic.page.html',
  styleUrls: ['./about-toxic.page.scss'],
})
export class AboutToxicPage implements OnInit {


  aboutDetox = {} as Post;

  constructor(public a: AppService) {
  }

  ngOnInit() {
  }


  src(post: Post) {
    return this.a.wp.getPostFileUrl(post);
  }
}
