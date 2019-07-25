import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-detoxification-diary',
  templateUrl: './detoxification-diary.page.html',
  styleUrls: ['./detoxification-diary.page.scss'],
})
export class DetoxificationDiaryPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
