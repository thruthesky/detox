import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {

  @Input() close : boolean; 

  name = 'terms';

  posts: { [key: string]: Post } = {};
  constructor(
    public a: AppService,
    public popoverController: PopoverController,
    ) { 

      this.posts = {};
      for (let i = 0; i < 4; i++) {
        const guid = `${this.name}-${i}`;
        this.posts[guid] = {} as any;
        this.a.wp.postGetIn({ guid: guid }, this.posts[guid]);
      }
    
    }

  ngOnInit() {}

}
