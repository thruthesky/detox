import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-desktop-home-calc-button',
  templateUrl: './desktop-home-calc-button.component.html',
  styleUrls: ['./desktop-home-calc-button.component.scss'],
})
export class DesktopHomeCalcButtonComponent implements OnInit {

  constructor(
    public a: AppService
  ) { }

  ngOnInit() { }

}
