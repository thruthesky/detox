import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { AlarmSetPopoverComponent } from 'src/app/components/alarm-set-popover/alarm-set-popover.component';
import { map } from 'rxjs/operators';
import { Alarm } from 'src/app/services/interface';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.page.html',
  styleUrls: ['./alarm-list.page.scss'],
})
export class AlarmListPage implements OnInit {

  hide = true;
  arrowIcon = 'arrow-down';

  alarms: Alarm[] = [];

  constructor(
    public a: AppService,
    public popoverController: PopoverController,
  ) {
    // this.onClickAlarmItem(null);
  }

  ngOnInit() {
    this.a.wp.post({ method: 'alarmList' }).pipe(map(r => r.data)).subscribe(res => {
      // console.log('alarmList:', res);
      this.alarms = res as any;
    }, e => this.a.error(e));
  }

  onClickArrow() {
    this.hide = !this.hide;
    this.arrowIcon = this.arrowIcon === 'arrow-down' ? 'arrow-up' : 'arrow-down';

  }



  async onClickAlarmUpdate(event: Event, alarm: Alarm) {
    const popover = await this.popoverController.create({
      event: event,
      component: AlarmSetPopoverComponent,
      cssClass: 'pop-alarm-set',
      mode: 'md',
      componentProps: {
        alarm: alarm
      }
    });
    await popover.present();
    const re = await popover.onWillDismiss();
    if (re.role === 'create') {
      this.updateAlarmList(re.data);
    } else if (re.role === 'update') {
      this.alarms.splice(this.alarms.findIndex(a => a.ID === re.data.ID), 1);
      this.updateAlarmList(re.data);
    }

  }

  updateAlarmList(newAlarm: Alarm) {
    const p = this.alarms.findIndex(a => {
      const eTime = this.a.add0(a.hour as any) + this.a.add0(a.minute as any);
      const nTime = this.a.add0(newAlarm.hour as any) + this.a.add0(newAlarm.minute as any);
      if (eTime > nTime) {
        return true;
      } else {
        return false;
      }
    });
    if (p >= 0) {
      this.alarms.splice(p, 0, newAlarm);
    } else {
      this.alarms.push(newAlarm);
    }
  }


  async onClickDelete(alarm: Alarm) {
    const title = alarm.title;
    const re = await this.a.confirm({ message: this.a.t({ en: `Do you want to delete this alarm - ${title}?`, ko: `"${title}" - 알람을 삭제하시겠습니까?` }) });
    console.log('re: ', re);
    if (re.role === 'no') {
      return;
    }
    this.a.wp.post({ method: 'alarmDelete', ID: alarm.ID }).pipe(map(r => r.data)).subscribe((res: Alarm) => {
      console.log('delete', res);
      this.alarms.splice(this.alarms.findIndex(a => a.ID === res.ID), 1);
    }, e => this.a.error(e));
  }

  onToggleAlarm(alarm: Alarm) {
    this.a.wp.post({ method: 'alarmEnable', ID: alarm.ID, enable: alarm.enabled === 'Y' ? '' : 'Y' }).pipe(
      map(r => r.data)
    ).subscribe(res => {
      console.log('enabled: ', res);
    }, e => this.a.error(e));
  }


}
