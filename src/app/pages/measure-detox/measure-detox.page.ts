import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-measure-detox',
  templateUrl: './measure-detox.page.html',
  styleUrls: ['./measure-detox.page.scss'],
})
export class MeasureDetoxPage implements OnInit {


  segmentValue = 'toxins';

  constructor(public a: AppService) {

   }

  ngOnInit() {
  }

  segmentChanged(ev: any) {

    this.segmentValue = ev.detail.value === 'toxins' ? 'toxins': 'beeman';

  }




  

}
