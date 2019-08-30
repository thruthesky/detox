import { Component, OnInit, Input, NgZone } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-join-menu',
  templateUrl: './join-menu.component.html',
  styleUrls: ['./join-menu.component.scss'],
})
export class JoinMenuComponent implements OnInit {

  tab = undefined;
  constructor(
    activateRoute: ActivatedRoute,
    router: Router,
    ngZone: NgZone,
    public a: AppService
  ) {

    activateRoute.paramMap.subscribe(params => {
      this.tab = undefined;

      console.log('url: ', router.url);
      if (router.url.indexOf('alarm') >= 0) {
        this.tab = 0;
      } else if (router.url.indexOf('training') >= 0) {
        this.tab = 1;
      } else if (router.url.indexOf('diary') >= 0) {
        this.tab = 2;
      }

      console.log('this.tab', this.tab);
    });
  }

  onIonChange(value: string) {
    // console.log('onIonChange() this.tab', this.tab);
    this.a.open(value);
  }

  ngOnInit(check?: string) {
    // switch (check) {
    //   case 'Alarm': this.tab = 0; break;
    //   case 'Training': this.tab = 1; break;
    //   case 'Diary': this.tab = 2; break;
    //   default: this.tab = 0;

    // }
  }

}




