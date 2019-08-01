import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-about-detoxification',
  templateUrl: './about-detoxification.page.html',
  styleUrls: ['./about-detoxification.page.scss'],
})
export class AboutDetoxificationPage implements OnInit {


  aboutDetox = {}  as Post;

  constructor(public a: AppService) {

    this.a.wp.postGetIn({ guid: a.pageCode.aboutDetox }, this.aboutDetox);

   }

  ngOnInit() {
  }

  src(post: Post) {
    return this.a.wp.getPostFileUrl(post);
  }

}
