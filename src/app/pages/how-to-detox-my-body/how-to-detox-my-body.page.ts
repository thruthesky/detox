import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-how-to-detox-my-body',
  templateUrl: './how-to-detox-my-body.page.html',
  styleUrls: ['./how-to-detox-my-body.page.scss'],
})
export class HowToDetoxMyBodyPage implements OnInit {

  name = 'how-detox';

  posts: { [key: string]: Post } = {};

  constructor(public a: AppService) {
    
    this.posts = {};
    for (let i = 0; i < 8; i++) {
      const guid = `${this.name}-${i}`;
      this.posts[guid] = {} as any;
      this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
    }
  
   }

  ngOnInit() {

  }

  src(post: Post) {
    return this.a.wp.getPostFileUrl(post);
  }

}
