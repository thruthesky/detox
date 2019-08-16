import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home-training-menu',
  templateUrl: './home-training-menu.component.html',
  styleUrls: ['./home-training-menu.component.scss'],
})
export class HomeTrainingMenuComponent implements OnInit {

  @Output() change = new EventEmitter<string>();

  constructor(
    public a: AppService
  ) {

  }

  ngOnInit() { }


  onClick(event: Event, name: string) {
    this.change.emit(name);
  }


}




