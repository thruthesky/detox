import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { fbind } from 'q';
import { AppService } from 'src/app/services/app.service';
import { map } from 'rxjs/operators';
import { Alarm } from 'src/app/services/interface';

@Component({
  selector: 'app-alarm-set-popover',
  templateUrl: './alarm-set-popover.component.html',
  styleUrls: ['./alarm-set-popover.component.scss'],
})
export class AlarmSetPopoverComponent implements OnInit {

  @Input() alarm: Alarm;

  hours = new Array(24).fill(true);
  minutes = new Array(60).fill(true);

  title = '';
  content = '';

  form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    // days: ['', [Validators.required]],
    hour: ['', [Validators.required]],
    minute: ['', [Validators.required]],
    timeSetting: ['', [Validators.required]],
  });
  constructor(
    public fb: FormBuilder,
    public pop: PopoverController,
    public a: AppService
  ) {
    // this.alarmCreate();
  }

  ngOnInit() {
    console.log(this.alarm);
    if (this.alarm) {

      // const days = [];
      // if (this.alarm.sunday === 'Y') {
      //   days.push('sunday');
      // }
      // if (this.alarm.monday === 'Y') {
      //   days.push('monday');
      // }
      // if (this.alarm.tuesday === 'Y') {
      //   days.push('tuesday');
      // }
      // if (this.alarm.wednesday === 'Y') {
      //   days.push('wednesday');
      // }
      // if (this.alarm.thursday === 'Y') {
      //   days.push('thursday');
      // }
      // if (this.alarm.friday === 'Y') {
      //   days.push('friday');
      // }
      // if (this.alarm.saturday === 'Y') {
      //   days.push('saturday');
      // }
      this.form.patchValue({
        title: this.alarm.title,
        content: this.alarm.content,
        hour: this.alarm.hour,
        minute: this.alarm.minute,
        timeSetting: this.alarm.timeSetting,
      });
    }
  }

  onSubmit() {


    // console.log('values', this.form.value);
    if (this.form.invalid) {
      // console.log('errors', this.form.errors);
      for (const k of Object.keys(this.form.value)) {
        // console.log('errors:', this.form.get(k).errors);
        if (this.form.get(k).errors) {
          this.a.alert({ message: this.a.t({ en: `Please input the information of ${k}.`, ko: `${k} 정보가 입력되지 않았습니다.` }) });
          return;
        }
      }
    }

    if (this.alarm && this.alarm.ID) {


      this.alarmUpdate();
    } else {
      this.alarmCreate();
    }
  }


  alarmCreate() {
    const req = {
      method: 'alarmCreate',
      title: this.form.get('title').value,
      content: this.form.get('content').value,
      days: this.form.get('days').value,
      hour: this.form.get('hour').value,
      minute: this.form.get('minute').value
    };
    this.a.wp.post(req).pipe(map(r => r.data)).subscribe(res => {
      // console.log('alramCreate: ', res);
      this.pop.dismiss(res, 'create');
    }, e => this.a.error(e));
  }
  alarmUpdate() {
    const req = {
      method: 'alarmUpdate',
      ID: this.alarm.ID,
      title: this.form.get('title').value,
      content: this.form.get('content').value,
      // days: this.form.get('days').value,
      hour: this.form.get('hour').value,
      minute: this.form.get('minute').value,
      timeSetting: this.form.get('timeSetting').value,

    };
    this.a.wp.post(req).pipe(map(r => r.data)).subscribe(res => {
      // console.log('alramUpdate: ', res);
      this.pop.dismiss(res, 'update');
    }, e => this.a.error(e));
  }

}
