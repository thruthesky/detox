import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-how-to-detox-my-body',
  templateUrl: './how-to-detox-my-body.page.html',
  styleUrls: ['./how-to-detox-my-body.page.scss'],
})
export class HowToDetoxMyBodyPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
