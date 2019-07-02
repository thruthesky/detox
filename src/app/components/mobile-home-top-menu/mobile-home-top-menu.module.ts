import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeTopMenuComponent } from './mobile-home-top-menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MobileHomeTopMenuComponent],
  exports: [MobileHomeTopMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class MobileHomeTopMenuModule { }
