import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { fbind } from 'q';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-alarm-set-popover',
  templateUrl: './alarm-set-popover.component.html',
  styleUrls: ['./alarm-set-popover.component.scss'],
})
export class AlarmSetPopoverComponent implements OnInit {


  hours = new Array(24).fill(true);
  minutes = new Array(60).fill(true);

  title = '';
  content = '';

  form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    days: ['', [Validators.required]],
    hour: ['', [Validators.required]],
    minute: ['', [Validators.required]],
  });
  constructor(
    public fb: FormBuilder,
    public pop: PopoverController,
    public a: AppService
  ) {
    this.alarmCreate();
  }

  ngOnInit() { }

  onSubmit() {


    console.log('values', this.form.value);
    if (this.form.invalid) {
      console.log('errors', this.form.errors);
      for (const k of Object.keys(this.form.value)) {
        console.log('errors:', this.form.get(k).errors);
        if (this.form.get(k).errors) {
          this.a.alert({ message: this.a.t({ en: `Please input the information of ${k}.`, ko: `${k} 정보가 입력되지 않았습니다.` }) });
          return;
        }
      }
    }

    this.alarmCreate();
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
    this.a.wp.post(req).subscribe(res => {
      console.log('alramCreate: ', res);
    }, e => this.a.error(e));
  }

}
