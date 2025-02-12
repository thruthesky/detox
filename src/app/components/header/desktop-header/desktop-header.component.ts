import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { MobileSidemenuComponent } from '../mobile-sidemenu/mobile-sidemenu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss'],
})
export class DesktopHeaderComponent implements OnInit {


  // hide = true;

  constructor(
    public a: AppService,
    public popoverController: PopoverController,
    public router: Router
  ) { }

  ngOnInit() { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MobileSidemenuComponent,
      event: ev,
      mode: 'md',
      translucent: true,
      cssClass: 'i-pop-width-360px i-pop-mt-5px  box-shadow-none',
      showBackdrop: false
    });
    return await popover.present();
  }

  onClickLogout() {
    this.a.logout();
    this.router.navigateByUrl('/');
  }


}


