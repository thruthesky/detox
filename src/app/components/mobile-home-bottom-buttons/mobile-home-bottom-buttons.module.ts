import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeBottomButtonsComponent } from './mobile-home-bottom-buttons.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ MobileHomeBottomButtonsComponent ],
  exports: [ MobileHomeBottomButtonsComponent ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class MobileHomeBottomButtonsModule { }
