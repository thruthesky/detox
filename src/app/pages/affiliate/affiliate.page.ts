import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.page.html',
  styleUrls: ['./affiliate.page.scss'],
})
export class AffiliatePage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
