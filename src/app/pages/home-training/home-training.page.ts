import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HomeTrainingMenuListComponent } from 'src/app/components/home-training-menu-list/home-training-menu-list.component';


type TabName = 'meditation' | 'yoga' | 'stretching' | 'core';


@Component({
  selector: 'app-home-training',
  templateUrl: './home-training.page.html',
  styleUrls: ['./home-training.page.scss'],
})
export class HomeTrainingPage implements OnInit {

  @ViewChild(HomeTrainingMenuListComponent, { static: true }) list: HomeTrainingMenuListComponent;
  tabName: TabName = 'meditation';
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

  onClickTab(name: TabName) {
    this.list.name = name;
    this.list.ngOnInit();
  }

}
