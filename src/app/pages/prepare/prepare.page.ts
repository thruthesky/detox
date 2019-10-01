import { Component, OnInit } from '@angular/core';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.page.html',
  styleUrls: ['./prepare.page.scss'],
})
export class PreparePage implements OnInit {



  // prepare = {} as Post;
  guid = 'join-prepare';
  mobileSrc = '';
  desktopSrc = '';

  constructor(public a: AppService) {
    this.a.wp.postGet({ guid: this.guid }).subscribe(post => {
      // console.log('post: post', post);
      this.pre(post);
    }, e => this.a.error(e));

  }

  ngOnInit() {
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


  // src(post: Post) {
  //   return this.a.wp.getPostFileUrl(post);
  // }

}

