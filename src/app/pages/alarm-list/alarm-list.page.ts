import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.page.html',
  styleUrls: ['./alarm-list.page.scss'],
})
export class AlarmListPage implements OnInit {

  hide = true;
  arrowIcon = "arrow-down";

  constructor(
      public a: AppService
  ) { }

  ngOnInit() {
  }

  onClickArrow() {
    this.hide = !this.hide;
    this.arrowIcon = this.arrowIcon === "arrow-down" ?  "arrow-up" : "arrow-down";

  }



}
