import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';




@Component({
  selector: 'app-my-promise',
  templateUrl: './my-promise.component.html',
  styleUrls: ['./my-promise.component.scss'],
})
export class MyPromiseComponent implements OnInit {


  @Input('promise') promisefromParent: string;

  promise: string;


  constructor(

    public popoverCtrl: PopoverController,
    public a: AppService

  ) {
    this.promise = this.promisefromParent;
  
  }

  ngOnInit() {
 
  }


  onSubmit() {

    this.a.wp.profileUpdate({ promise: this.promise }).subscribe(res => {
      console.log('res: ', res);
      this.popoverCtrl.dismiss(this.promise, 'success');
    }, e => this.a.error(e));
  }

  onCancel() {


      const r = confirm('your changes is not saved!');
      if (r) {
        this.popoverCtrl.dismiss();
      }
    
  }


}
