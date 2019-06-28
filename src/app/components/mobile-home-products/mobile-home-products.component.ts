import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mobile-home-products',
  templateUrl: './mobile-home-products.component.html',
  styleUrls: ['./mobile-home-products.component.scss'],
})
export class MobileHomeProductsComponent implements OnInit {

  img = '/assets/img/product/product_mobile.png';
  options = {
    initialSlide: 3,
    slidesPerView: 2,
    speed: 400,
    loop: true,
  };

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {}

}


