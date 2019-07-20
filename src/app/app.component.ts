import { Component, AfterViewInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public a: AppService,
    public menu: MenuController
  ) {

    // a.wp.call({ function: 'get_posts' }).subscribe(res => {
    //   console.log('res: ', res);
    // }, e => a.error(e));

    a.wp.postSearch({ category_name: 'qna' }).subscribe(posts => {
      console.log('posts: ', posts);
    }, e => a.error(e));
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    if (this.a.env.production === false) {
      // this.menu.open();
    }
  }

}
