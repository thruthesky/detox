import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-about-detoxification',
  templateUrl: './about-detoxification.page.html',
  styleUrls: ['./about-detoxification.page.scss'],
})
export class AboutDetoxificationPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
