import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-join-menu',
  templateUrl: './join-menu.component.html',
  styleUrls: ['./join-menu.component.scss'],
})
export class JoinMenuComponent implements OnInit {

  constructor(
    public a: AppService
  ) {

  }

  onIonChange(value: string) {
    this.a.open(value);
  }

  ngOnInit(check?: string) {

  }

}




