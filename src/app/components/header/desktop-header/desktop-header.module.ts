import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderComponent } from './desktop-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MobileSidemenuModule } from '../mobile-sidemenu/mobile-sidemenu.module';
import { MobileSidemenuComponent } from '../mobile-sidemenu/mobile-sidemenu.component';

@NgModule({
  entryComponents: [MobileSidemenuComponent],
  declarations: [ DesktopHeaderComponent ],
  exports: [ DesktopHeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    MobileSidemenuModule,
    
  ]
})
export class DesktopHeaderModule { }
