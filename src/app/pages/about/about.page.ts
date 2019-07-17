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

  postTopLeft: Post;
  postTopRight: Post;
  postBottomLeft: Post;
  postBottomRight: Post;
  content = this.a.t(text.inLoading);
  constructor(
    public a: AppService
  ) {
    this.a.wp.postGet( a.pageCode.aboutTopLeft ).subscribe(res => {
      console.log('about page post: ', res);
      this.postTopLeft = res;
    }, e => this.a.error(e));

    this.a.wp.postGet( a.pageCode.aboutTopRight ).subscribe(res => {
      console.log('about page post: ', res);
      this.postTopRight = res;
    }, e => this.a.error(e));

    this.a.wp.postGet( a.pageCode.aboutBottomLeft ).subscribe(res => {
      console.log('about page post: ', res);
      this.postBottomLeft = res;
    }, e => this.a.error(e));

    this.a.wp.postGet( a.pageCode.aboutBottomRight ).subscribe(res => {
      console.log('about page post: ', res);
      this.postBottomRight = res;
    }, e => this.a.error(e));






  }

  ngOnInit() {
  }

}
