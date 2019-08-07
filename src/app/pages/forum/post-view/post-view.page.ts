import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.page.html',
  styleUrls: ['./post-view.page.scss'],
})
export class PostViewPage implements OnInit {

  post: Post;
  constructor(
    activatedRoute: ActivatedRoute,
    public a: AppService
  ) {
    activatedRoute.paramMap.subscribe(params => {
      this.a.wp.postGet({ ID: params.get('ID') }).subscribe(post => {
        this.post = post;
      }, e => this.a.error(e));
    });

  }

  ngOnInit() {
  }

}


