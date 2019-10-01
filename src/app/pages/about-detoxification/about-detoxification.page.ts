import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { text } from 'src/app/services/text';

@Component({
  selector: 'app-about-detoxification',
  templateUrl: './about-detoxification.page.html',
  styleUrls: ['./about-detoxification.page.scss'],
})
export class AboutDetoxificationPage implements OnInit {


  // aboutDetox = {}  as Post;


  content = this.a.t(text.inLoading);
  guid = 'about-detox';
  mobileSrc = '';
  desktopSrc = '';

  constructor(public a: AppService) {
    this.a.wp.postGet({ guid: this.guid }).subscribe(post => {
      // console.log('post: post', post);
      this.pre(post);

    });
  }

  ngOnInit() {
  }

  // src(post: Post) {
  //     return this.a.wp.getPostFileUrl(post);
  //   }


  pre(post: Post) {
    if (!post || !post.files || !post.files.length) {
      return;
    }
    for (const file of post.files) {
      if (file.name.indexOf('mobile') >= 0) {
        this.mobileSrc = file.url;
      } else if (file.name.indexOf('desktop') >= 0) {
        this.desktopSrc = file.url;
      }
    }
  }


  onEdit(post: Post) {
    this.pre(post);
  }

}
