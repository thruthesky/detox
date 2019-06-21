import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHomeTopSliderComponent } from './mobile-home-top-slider.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ MobileHomeTopSliderComponent ],
  exports: [ MobileHomeTopSliderComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MobileHomeTopSliderModule { }
