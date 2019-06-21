import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mobile-home-calc-button',
  templateUrl: './mobile-home-calc-button.component.html',
  styleUrls: ['./mobile-home-calc-button.component.scss'],
})
export class MobileHomeCalcButtonComponent implements OnInit {

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {}

}

