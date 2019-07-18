import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';


type TabName = 'meditation' | 'yoga' | 'stretcing' | 'core';


@Component({
  selector: 'app-home-training',
  templateUrl: './home-training.page.html',
  styleUrls: ['./home-training.page.scss'],
})
export class HomeTrainingPage implements OnInit {

  tabName: TabName = 'meditation';
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

  onClickTab(name: TabName) {
    this.tabName = name;
  }

}
