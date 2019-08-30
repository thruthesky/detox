import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHomeCalcButtonComponent } from './desktop-home-calc-button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DesktopHomeCalcButtonComponent],
  exports: [DesktopHomeCalcButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class DesktopHomeCalcButtonModule { }
