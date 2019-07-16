import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-my-promise',
  templateUrl: './my-promise.component.html',
  styleUrls: ['./my-promise.component.scss'],
})
export class MyPromiseComponent implements OnInit {

  promise: string;


  constructor(

    public popoverCtrl: PopoverController,
    public a: AppService

  ) {



  }

  ngOnInit() { }


  onSubmit() {
    console.log('promise: ', this.promise);
    this.a.wp.profileUpdate({ promise: this.promise }).subscribe(res => {
      console.log('res: ', res);
      this.popoverCtrl.dismiss(this.promise, 'success');
    }, e => this.a.error(e));
  }


}
