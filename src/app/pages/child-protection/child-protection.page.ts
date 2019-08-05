import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-child-protection',
  templateUrl: './child-protection.page.html',
  styleUrls: ['./child-protection.page.scss'],
})
export class ChildProtectionPage implements OnInit {

  
  name = 'child-protection';

  posts: { [key: string]: Post } = {};

  constructor(public a: AppService) { 
    
    this.posts = {};
    for (let i = 0; i < 20; i++) {
      const guid = `${this.name}-${i}`;
      this.posts[guid] = {} as any;
      this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
    }

  }

  ngOnInit() {
  }


}
