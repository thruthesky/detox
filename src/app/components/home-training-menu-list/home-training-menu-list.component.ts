import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-training-menu-list',
  templateUrl: './home-training-menu-list.component.html',
  styleUrls: ['./home-training-menu-list.component.scss'],
})
export class HomeTrainingMenuListComponent implements OnInit, OnDestroy {


  @Output() selected = new EventEmitter<string>();
  subscription = new Subscription();
  posts: { [key: string]: Post } = {};

  name = '';
  constructor(
    public a: AppService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe(params => {
      this.loadItems(params.get('name'));
    });
  }

  ngOnInit() {

    //console.log('posts: ', this.posts);

  }

  loadItems(name: string) {
    if (!name) {
      return;
    }
    this.name = name;
    this.posts = {};
    for (let i = 0; i < 4; i++) {
      const guid = `${name}-${i}`;
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


}
