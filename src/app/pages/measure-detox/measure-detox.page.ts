import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-measure-detox',
  templateUrl: './measure-detox.page.html',
  styleUrls: ['./measure-detox.page.scss'],
})
export class MeasureDetoxPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
