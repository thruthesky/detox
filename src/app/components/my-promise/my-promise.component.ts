import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-my-promise',
  templateUrl: './my-promise.component.html',
  styleUrls: ['./my-promise.component.scss'],
})
export class MyPromiseComponent implements OnInit {


  constructor(
    public popoverCtrl: PopoverController
  ) { }

  ngOnInit() { }

}
