import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-detoxification-tip',
  templateUrl: './detoxification-tip.page.html',
  styleUrls: ['./detoxification-tip.page.scss'],
})
export class DetoxificationTipPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
