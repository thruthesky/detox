import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-detoxification-tip',
  templateUrl: './detoxification-tip.page.html',
  styleUrls: ['./detoxification-tip.page.scss'],
})
export class DetoxificationTipPage implements OnInit {


  tipTitle = {} as Post;

  constructor(public a: AppService) {
    this.a.wp.postGetIn( { guid: 'tipTitle' }  , this.tipTitle);
   }

  ngOnInit() {
  }

}
