import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home-training-menu-item',
  templateUrl: './home-training-menu-item.component.html',
  styleUrls: ['./home-training-menu-item.component.scss'],
})
export class HomeTrainingMenuItemComponent implements OnInit {

  ID = '';
  constructor(
    public a: AppService
  ) { }

  ngOnInit() { }


  onLoad(ID: string) {
    this.ID = ID;
  }
}
