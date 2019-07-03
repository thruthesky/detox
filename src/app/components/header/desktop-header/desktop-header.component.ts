import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../../menu-popover/menu-popover.component';
import { MobileSidemenuComponent } from '../mobile-sidemenu/mobile-sidemenu.component';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss'],
})
export class DesktopHeaderComponent implements OnInit {

  constructor(
    public a: AppService,
    public popoverController: PopoverController
  ) { }

  ngOnInit() { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MobileSidemenuComponent,
      event: ev,
      mode: 'md',
      translucent: true,
      cssClass: 'i-pop-width-300px i-pop-mt-5px i-bg-white-trans box-shadow-none',
      showBackdrop: false
    });
    return await popover.present();
  }

}


