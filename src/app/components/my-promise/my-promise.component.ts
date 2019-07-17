import { Component, OnInit, Input } from '@angular/core';
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
    this.promise = a.wp.user('promise');
  }

  ngOnInit() {

  }


  onSubmit() {

    this.a.wp.profileUpdate({ promise: this.promise }).subscribe(res => {
      this.popoverCtrl.dismiss();
    }, e => this.a.error(e));
  }

  onCancel() {
    this.popoverCtrl.dismiss();

    // }
    // const r = confirm('your changes is not saved!');
    // if (r) {
    //   this.popoverCtrl.dismiss();
    // }

  }


}
