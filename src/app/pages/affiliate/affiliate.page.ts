import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.page.html',
  styleUrls: ['./affiliate.page.scss'],
})
export class AffiliatePage implements OnInit {

  affiliate = {} as Post;


  constructor(public a: AppService) { 
    this.a.wp.postGetIn({ guid: a.pageCode.affiliate }, this.affiliate);

  }

  ngOnInit() {

  }

}
