import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeTopMenuComponent } from './mobile-home-top-menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MobileHomeTopMenuComponent],
  exports: [MobileHomeTopMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MobileHomeTopMenuModule { }
