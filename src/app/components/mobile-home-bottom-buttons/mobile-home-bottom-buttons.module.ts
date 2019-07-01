import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeBottomButtonsComponent } from './mobile-home-bottom-buttons.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ MobileHomeBottomButtonsComponent ],
  exports: [ MobileHomeBottomButtonsComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MobileHomeBottomButtonsModule { }
