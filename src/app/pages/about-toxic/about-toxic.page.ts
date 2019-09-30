import { Component, OnInit } from '@angular/core';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';
import { text } from 'src/app/services/text';

@Component({
  selector: 'app-about-toxic',
  templateUrl: './about-toxic.page.html',
  styleUrls: ['./about-toxic.page.scss'],
})
export class AboutToxicPage implements OnInit {


  // aboutToxic = {} as Post;

  content = this.a.t(text.inLoading);
  guid = 'about-toxic';
  mobileSrc = '';
  desktopSrc = '';

  constructor(public a: AppService) {
    this.a.wp.postGet({ guid: this.guid }).subscribe(post => {
      // console.log('post: post', post);
      this.pre(post);

    });
    // this.a.wp.postGetIn({ guid: a.pageCode.aboutToxic }, this.aboutToxic);
  }

  ngOnInit() {
  }


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

  // src(post: Post) {
  //   return this.a.wp.getPostFileUrl(post);
  // }
}
