import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { AlarmSetPopoverComponent } from 'src/app/components/alarm-set-popover/alarm-set-popover.component';
import { map } from 'rxjs/operators';
import { Alarm } from 'src/app/services/interface';
import { Post, Posts } from 'modules/wordpress-api/services/wordpress-api.interface';
import { JoinMenuComponent } from 'src/app/components/join-menu/join-menu.component';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.page.html',
  styleUrls: ['./alarm-list.page.scss'],
})
export class AlarmListPage implements OnInit {

  hide = true;
  arrowIcon = 'arrow-down';

  alarms: Alarm[] = [];
  creatingDefaultAlarms = false;
  defaultAlarms: Alarm[] = [
    {
      title: '기상시간',
      content: `물 한잔과 프로바이오틱스 먹기 , 해독주스 마시기, 가벼운 스트레칭`
    },
    {
      title: '출근시간 5분전',
      content: `(집에서 나가는 시간 5분전으로 체크) 오늘 하루도 파이팅, 물 1잔 마시기`
    },
    {
      title: '회사 출근',
      content: `물 한잔 마시며 오늘의 스케줄을 정리.`
    },
    {
      title: '물 마시기',
      content: `(출근 1시간 후 알람 설정) 초유, 물 1잔 마시기 문자 전송`
    },
    {
      title: '물마시기',
      content: `(출근 2시간 후 알람 설정) 가볍게 스트레칭을 하고 물 1잔 마시기.`
    },
    {
      title: '점심 시간',
      content: `(10분전 알람 설정) 해독을 위한 저자극 식사권장, 식사 전 물 1잔 마시기`
    },
    {
      title: '산책하기',
      content: `(점심시간 30분 후 알람 설정) : 식사 후 햇빛 보며 산책하기`
    },
    {
      title: '오후 업무',
      content: `(오후업무 시작 5분전 알람 설정) : 물 한잔 마시며 오후업무 준비.`
    },
    {
      title: '졸음방지',
      content: `(오후 업무시간 1시간 후 알람 설정) 졸음 방지 가벼운 스트레칭과 물 1잔 마시기`
    },
    {
      title: '밀크씨슬 먹기',
      content: `(오후 업무시간 2시간 후 알람 설정) 잘하고 있습니다. 밀크씨슬을 물과 함께 섭취하세요.`
    },
    {
      title: '퇴근',
      content: `(퇴근 30분전 알람 설정) 업무 마무리, 물 1잔 마시기`
    },
    {
      title: '귀가',
      content: ` (퇴근 후 집 도착 시간 알람 설정) 오늘 하루도 정말 수고 많았습니다. 당신이 최고, 물 1잔 마시고 손발 씻으세요.`
    },
    {
      title: '독서',
      content: `(귀가 후 30분 후 알람 설정) 책은 마음의 양식. 책을 읽자 책, 책, 책`
    },
    {
      title: '저녁식사',
      content: `(저녁 식사시간 책정은 다음날 아침 해독주스 먹는 시간까지 최대한 12시간 간격을 두고 책정한다.) 물 한잔 마시기, 저 자극 식사 권장`
    },
    {
      title: '운동하기',
      content: `(저녁 식사 1시간 후 알람 설정) 물 1잔 마시기와 30분 이상 운동하기 (홈 트레이닝 메뉴에서 원하는 요가와 운동 선택)`
    },
    {
      title: '샤워하기',
      content: `운동 후 물 1잔 마시고 샤워하기.(양치 필수)`
    },
    {
      title: '명상(홈 메뉴 활용)',
      content: `취침 30분전 알람 설정) 5분~10분 명상 하세요.`
    },
    {
      title: '해독일지 작성',
      content: `(취침 15분전 알람 설정) 해독일지를 작성 하세요.`
    },
    {
      title: '취침',
      content: `(취침시간 알람 설정) 오늘도 잘 견뎌줘서 고마워~ 잘자~ 내일은 더멋진날이 될거야~ 물한잔 더마시기`
    },
  ];

  alarmsTitle = {} as Post;

  constructor(
    public a: AppService,
    public popoverController: PopoverController,
  ) {
    window['comp'] = this;
    // this.onClickAlarmItem(null);
    this.a.wp.postGetIn({ guid: 'alarmsTitle' }, this.alarmsTitle);

  }

  ngOnInit() {
    console.log(this.alarms);
    this.a.wp.post({ method: 'alarmList' }).pipe(map(r => r.data)).subscribe(res => {
      // console.log('alarmList:', res);
      if (res && res.length === 0) {
        // console.log('No alaram exists. ');
        this.createAlarams();
      } else {
        console.log('res.length', res.length, res);
        this.creatingDefaultAlarms = false;
        this.alarms = res as any;

        /**
         * Deleting alrams that has created.
         */
        // for (const a of this.alarms) {
        //   this.a.wp.post({ method: 'alarmDelete', ID: a.ID }).subscribe(res => console.log('deleted'));
        // }
      }

    }, e => this.a.error(e));
  }

  async createAlarams() {
    this.creatingDefaultAlarms = true;
    const promise = [];
    for (const a of this.defaultAlarms) {
      // console.log('alaram: ', a);

      /**
       * @todo this code is copied from alaram-set-popover. It need to be moved to a service.
       */
      const req = {
        method: 'alarmCreate',
        title: a.title,
        content: a.content,
        days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        hour: '1',
        minute: '0',
        enabled: ''
      };
      /**
       * 2019-09-27. It does not create all default alrams at one.
       * It create one by one. It will take longer time to create.
       */
      await this.a.wp.post(req).pipe(map(r => r.data)).toPromise();
      // promise.push(this.a.wp.post(req).pipe(map(r => r.data)).toPromise());
    }

    // await Promise.all(promise);
    this.ngOnInit();
  }

  onClickArrow() {
    this.hide = !this.hide;
    this.arrowIcon = this.arrowIcon === 'arrow-down' ? 'arrow-up' : 'arrow-down';

  }



  async onClickAlarmUpdate(alarm: Alarm) {
    // console.log(alarm);
    const popover = await this.popoverController.create({
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
      this.alarms.splice(this.alarms.findIndex(a => a.ID === re.data.ID), 1, re.data);
      // this.updateAlarmList(re.data);
    }
  }

  /**
   * 
   * @param newAlarm
   */
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
    // @todo don't ... re-sort.
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
    this.a.wp.post({ method: 'alarmEnable', ID: alarm.ID, enabled: alarm.enabled === 'Y' ? '' : 'Y' }).pipe(
      map(r => r.data)
    ).subscribe(res => {
      console.log('enabled: ', res);
    }, e => this.a.error(e));
  }


  checkHour(n: number): boolean {
    return n > 12 ? true : false;
  }

  displayHour(n: number): number {
    if (n > 12) {
      n = n - 12;
    }
    this.a.add0(n);
    return n;
  }

}
