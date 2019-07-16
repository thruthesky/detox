import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-my-promise',
  templateUrl: './my-promise.component.html',
  styleUrls: ['./my-promise.component.scss'],
})
export class MyPromiseComponent implements OnInit {

  promiseMessage: string;


  constructor(
    public popoverCtrl: PopoverController,
    public navP: NavParams
  ) { 

    if (this.navP.get('msg'))  {
      this.promiseMessage = this.navP.get('msg');
    }
    
  }

  ngOnInit() { }

}
