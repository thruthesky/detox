import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { text } from 'src/app/services/text';
import { Post } from 'modules/wordpress-api/wordpress-api.interface';


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

  posts = {
    topLeft: {} as Post,
    topRight: {} as Post,
    bottomLeft: {} as Post,
    bottomRight: {} as Post,
  };
  content = this.a.t(text.inLoading);
  constructor(
    public a: AppService
  ) {
    this.a.wp.postGetIn({ guid: a.pageCode.aboutTopLeft }, this.posts.topLeft);
    this.a.wp.postGetIn({ guid: a.pageCode.aboutTopRight }, this.posts.topRight);
    this.a.wp.postGetIn({ guid: a.pageCode.aboutBottomLeft }, this.posts.bottomLeft);
    this.a.wp.postGetIn({ guid: a.pageCode.aboutBottomLeft }, this.posts.bottomLeft);

    // this.a.wp.postGet( a.pageCode.aboutTopLeft ).subscribe(res => {
    //   console.log('about page post: ', res);
    //   this.postTopLeft = res;
    // }, e => console.log(e));

    // this.a.wp.postGet( a.pageCode.aboutTopRight ).subscribe(res => {
    //   console.log('about page post: ', res);
    //   this.postTopRight = res;
    // }, e => console.log(e));

    // this.a.wp.postGet( a.pageCode.aboutBottomLeft ).subscribe(res => {
    //   console.log('about page post: ', res);
    //   this.postBottomLeft = res;
    // }, e => console.log(e));

    // this.a.wp.postGet( a.pageCode.aboutBottomRight ).subscribe(res => {
    //   console.log('about page post: ', res);
    //   this.postBottomRight = res;
    // }, e => console.log(e));



  }

  ngOnInit() {
  }

}
