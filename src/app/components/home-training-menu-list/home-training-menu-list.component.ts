import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-training-menu-list',
  templateUrl: './home-training-menu-list.component.html',
  styleUrls: ['./home-training-menu-list.component.scss'],
})
export class HomeTrainingMenuListComponent implements OnInit, OnDestroy {


  @Input() name = '';

  subscription = new Subscription();
  posts: { [key: string]: Post } = {};
  constructor(
    public a: AppService
  ) {
  }

  ngOnInit() {
    console.log('posts: ', this.posts);
    this.posts = {};
    for (let i = 0; i < 4; i++) {
      const guid = `${this.name}-${i}`;
      this.posts[guid] = {} as any;
      this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  src(post: Post) {
    return this.a.wp.getPostFileUrl(post);
  }

  itemClick(item : Post ) {
    console.log(item);
  }

}
