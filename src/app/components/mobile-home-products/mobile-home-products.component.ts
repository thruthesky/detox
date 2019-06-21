import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mobile-home-products',
  templateUrl: './mobile-home-products.component.html',
  styleUrls: ['./mobile-home-products.component.scss'],
})
export class MobileHomeProductsComponent implements OnInit {

  img = '/assets/img/no-image.png';
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {}

}


