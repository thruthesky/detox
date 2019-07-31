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
  profilePhotoUrl = this.a.anonymousPhotoUrl;

  constructor(
    private router: Router,
    private menu: MenuController,
    private popoverController: PopoverController,
    public a: AppService
  ) {

    a.wp.profile().subscribe(user => {
      this.user = user;

      if (user.photoURL) {
        this.profilePhotoUrl = user.photoURL;
      }
      
    });


   }

  ngOnInit() { }


  open(url: string) {

    if (this.a.isDesktop) {
      this.popoverController.dismiss();
    } else {
      this.menu.close();
    }

    if (url) {
      this.router.navigateByUrl(url);
    }
  }

  onClickLogout() {

    this.a.logout();
    this.open('/');
  }





}

