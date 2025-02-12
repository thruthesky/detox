import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { User } from 'modules/wordpress-api/services/wordpress-api.interface';

@Component({
  selector: 'app-mobile-sidemenu',
  templateUrl: './mobile-sidemenu.component.html',
  styleUrls: ['./mobile-sidemenu.component.scss'],
})
export class MobileSidemenuComponent implements OnInit {

  user: User;
  profilePhotoUrl = this.a.wp.myPhotoUrl;

  constructor(
    private router: Router,
    private menu: MenuController,
    private popoverController: PopoverController,
    public a: AppService
  ) {


    if (a.wp.getUserData()) {
      this.user = a.wp.getUserData();
    }



  }

  ngOnInit() { }


  open(url: string, event?: Event) {
    if (event) {
      event.stopPropagation();
    }

    if (this.a.isDesktop) {
      this.popoverController.dismiss();
    } else {
      this.menu.close();
    }

    if (url) {
      this.router.navigateByUrl(url);
    }
  }

  onClickLogout(event?: any) {
    this.a.logout();
    this.open('/', event);
  }





}

