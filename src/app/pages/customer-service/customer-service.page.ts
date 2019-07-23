import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.page.html',
  styleUrls: ['./customer-service.page.scss'],
})
export class CustomerServicePage implements OnInit {

  constructor( public a: AppService) { }

  ngOnInit() {
  }

}
