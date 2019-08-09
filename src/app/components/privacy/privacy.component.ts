import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {

  @Input() close : boolean; 

  name = 'privacy'

  posts: { [key: string]: Post } = {};

  privacyTitle = {} as Post ;

  constructor(
    public a: AppService,
    public popoverController: PopoverController,
    ) {
      this.posts = {};
      for (let i = 0; i < 20; i++) {
        const guid = `${this.name}-${i}`;
        this.posts[guid] = {} as any;
        this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
      }
      this.a.wp.postGetIn( { guid: 'privacyTitle' }  , this.privacyTitle);


    }

  ngOnInit() {}

}
