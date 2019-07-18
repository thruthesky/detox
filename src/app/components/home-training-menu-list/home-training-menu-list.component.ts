import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'modules/wordpress-api/wordpress-api.interface';
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
  posts: Post[] = Array(4);
  constructor(
    public a: AppService
  ) {
  }

  ngOnInit() {
    console.log('posts: ', this.posts);

    for (let i = 0; i < 4; i++) {
      this.subscription.add(this.a.wp.postGet(`${this.name}-${i}`).subscribe(post => {
        console.log('post', post);
        this.posts[i] = post;
      }, e => this.a.error(e)));
    }

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
