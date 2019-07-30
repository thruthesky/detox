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


  terms = {} as Post;
  constructor(
    public a: AppService,
    public popoverController: PopoverController,
    ) { 

      this.a.wp.postGetIn({ guid: a.pageCode.terms }, this.terms);
    
    }

  ngOnInit() {}

}
