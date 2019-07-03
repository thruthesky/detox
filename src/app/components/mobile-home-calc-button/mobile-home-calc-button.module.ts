import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeCalcButtonComponent } from './mobile-home-calc-button.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ MobileHomeCalcButtonComponent ],
  exports: [ MobileHomeCalcButtonComponent ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class MobileHomeCalcButtonModule { }
