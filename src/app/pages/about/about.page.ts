import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { text } from 'src/app/services/text';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  // postTopLeft: Post;
  // postTopRight: Post;
  // postBottomLeft: Post;
  // postBottomRight: Post;


  // posts = {
  //   topLeft: {} as Post,
  //   topRight: {} as Post,
  //   bottomLeft: {} as Post,
  //   bottomRight: {} as Post,
  // };
  content = this.a.t(text.inLoading);
  guid = '7detox-about';
  mobileSrc = '';
  desktopSrc = '';
  constructor(
    public a: AppService
  ) {
    this.a.wp.postGet({ guid: this.guid }).subscribe(post => {
      // console.log('post: post', post);
      this.pre(post);
    }, e => this.a.error(e));
    // this.a.wp.postGetIn({ guid: a.pageCode.aboutTopLeft }, this.posts.topLeft);
    // this.a.wp.postGetIn({ guid: a.pageCode.aboutTopRight }, this.posts.topRight);
    // this.a.wp.postGetIn({ guid: a.pageCode.aboutBottomLeft }, this.posts.bottomLeft);
    // this.a.wp.postGetIn({ guid: a.pageCode.aboutBottomRight }, this.posts.bottomRight);
  }

  ngOnInit() {
  }

  onPageContentEdited(post: Post) {
    // console.log('Yeap! page conetnt edited: ', post);
  }


  onEdit(post: Post) {
    this.pre(post);
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
}

