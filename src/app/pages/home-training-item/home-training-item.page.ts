import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home-training-item',
  templateUrl: './home-training-item.page.html',
  styleUrls: ['./home-training-item.page.scss'],
})
export class HomeTrainingItemPage implements OnInit {

  constructor(public a: AppService) { }

  ngOnInit() {
  }

}
