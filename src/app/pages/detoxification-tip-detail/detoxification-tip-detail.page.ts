import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-detoxification-tip-detail',
  templateUrl: './detoxification-tip-detail.page.html',
  styleUrls: ['./detoxification-tip-detail.page.scss'],
})
export class DetoxificationTipDetailPage implements OnInit {

  post: Post;
  tipTitle = {} as Post;

  constructor(
    public activatedRoute: ActivatedRoute,
    public a: AppService,
  ) {
    activatedRoute.paramMap.subscribe(params => {
      this.a.wp.postGet({ ID: params.get('ID') }).subscribe(post => {
        this.post = post;
        console.log(this.post);
      }, e => this.a.error(e));
    });

    this.a.wp.postGetIn({ guid: 'tipTitle' }, this.tipTitle);
  }

  ngOnInit() {
  }

}
