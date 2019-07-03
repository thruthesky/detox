import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHomeTopSliderComponent } from './desktop-home-top-slider.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ DesktopHomeTopSliderComponent ],
  exports: [ DesktopHomeTopSliderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class DesktopHomeTopSliderModule { }

