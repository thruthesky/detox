import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mobile-home-bottom-buttons',
  templateUrl: './mobile-home-bottom-buttons.component.html',
  styleUrls: ['./mobile-home-bottom-buttons.component.scss'],
})
export class MobileHomeBottomButtonsComponent implements OnInit {

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {}

}
