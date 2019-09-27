import { Component, OnInit } from '@angular/core';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.page.html',
  styleUrls: ['./prepare.page.scss'],
})
export class PreparePage implements OnInit {



  prepare = {} as Post;

  constructor(public a: AppService) {
    this.a.wp.postGetIn({ guid: a.pageCode.prepare }, this.prepare);

  }

  ngOnInit() {
  }


  src(post: Post) {
    return this.a.wp.getPostFileUrl(post);
  }

}

