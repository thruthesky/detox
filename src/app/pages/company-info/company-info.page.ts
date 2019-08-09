import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { PostCreatePage } from '../forum/post-create/post-create.page';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.page.html',
  styleUrls: ['./company-info.page.scss'],
})
export class CompanyInfoPage implements OnInit {

  
  name = 'circle';

  companyInfo = {
    title : {} as Post,
    topPost : {} as Post,
    bottomPost : {} as Post
  };

  pageCode = {
    top_post : 'top-post',
    bottom_post : 'bottom-post',
  };


  posts: { [key: string]: Post } = {};

  constructor(public a: AppService) {

    this.posts = {};
    for (let i = 0; i < 3; i++) {
      const guid = `${this.name}-${i}`;
      this.posts[guid] = {} as any;
      this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
    }

    this.a.wp.postGetIn( { guid: this.pageCode.top_post }  , this.companyInfo.topPost);
    this.a.wp.postGetIn( { guid: this.pageCode.bottom_post }  , this.companyInfo.bottomPost);
    this.a.wp.postGetIn( { guid: 'companyTitle' }  , this.companyInfo.title);

   }

  ngOnInit() {

  }


  
  src(post: Post) {
    return this.a.wp.getPostFileUrl(post);
  }

}
