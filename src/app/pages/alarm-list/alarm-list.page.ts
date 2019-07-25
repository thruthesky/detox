import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { AlarmSetPopoverComponent } from 'src/app/components/alarm-set-popover/alarm-set-popover.component';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.page.html',
  styleUrls: ['./alarm-list.page.scss'],
})
export class AlarmListPage implements OnInit {

  hide = true;
  arrowIcon = "arrow-down";

  constructor(
      public a: AppService,
      public popoverController: PopoverController,
  ) { }

  ngOnInit() {
  }

  onClickArrow() {
    this.hide = !this.hide;
    this.arrowIcon = this.arrowIcon === "arrow-down" ?  "arrow-up" : "arrow-down";

  }


  
    async onClickAlarmItem() {
      const popover = await this.popoverController.create({
        component: AlarmSetPopoverComponent,
        cssClass: 'pop-alarm-set',
      });
      return await popover.present();
    }
  

}
