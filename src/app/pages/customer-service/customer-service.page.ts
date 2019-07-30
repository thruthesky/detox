import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.page.html',
  styleUrls: ['./customer-service.page.scss'],
})
export class CustomerServicePage implements OnInit {

  
  customerService = {} as Post;
  guid = 'customer-service';

  constructor( public a: AppService) {
    this.a.wp.postGetIn({ guid: this.guid  }, this.customerService);
   }

  ngOnInit() {
  }

  

}
