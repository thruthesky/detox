import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHomeTopSliderComponent } from './desktop-home-top-slider.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ DesktopHomeTopSliderComponent ],
  exports: [ DesktopHomeTopSliderComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class DesktopHomeTopSliderModule { }
