import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mobile-home-top-menu',
  templateUrl: './mobile-home-top-menu.component.html',
  styleUrls: ['./mobile-home-top-menu.component.scss'],
})
export class MobileHomeTopMenuComponent implements OnInit {

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {}

}
