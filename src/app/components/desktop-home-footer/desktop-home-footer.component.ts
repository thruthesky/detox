import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-desktop-home-footer',
  templateUrl: './desktop-home-footer.component.html',
  styleUrls: ['./desktop-home-footer.component.scss'],
})
export class DesktopHomeFooterComponent implements OnInit {


  name = 'footer';

  posts: { [key: string]: Post } = {};


  constructor(
    public a: AppService
  ) {
    this.posts = {};
    for (let i = 0; i < 4; i++) {
      const guid = `${this.name}-${i}`;
      this.posts[guid] = {} as any;
      this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
    }
  }

  ngOnInit() { }

}
