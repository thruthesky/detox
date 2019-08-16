import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-home-training-menu-item',
  templateUrl: './home-training-menu-item.component.html',
  styleUrls: ['./home-training-menu-item.component.scss'],
})
export class HomeTrainingMenuItemComponent implements OnInit {

  ID = '';

  post: Post;

  posts: { [key: string]: Post } = {};

  constructor(
    public a: AppService
  ) {}

  ngOnInit() { }


  onLoad(ID: string) {

    this.ID = ID;

    if (this.ID) {
      this.a.wp.postGet({ ID: this.ID }).subscribe(post => {
        this.post = post;
        // console.log(this.post);

        this.posts = {};
        for (let i = 0; i < 3; i++) {
          const guid = `${this.post.ID}-${i}`;
          this.posts[guid] = {} as any;
          this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
        }


      }, e => this.a.error(e));

    }


  }


}
