import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MobileHeaderModule } from 'src/app/components/header/mobile/mobile-header.module';
import { MobileHomeTopMenuModule } from 'src/app/components/mobile-home-top-menu/mobile-home-top-menu.module';
import { MobileHomeTopSliderModule } from 'src/app/components/mobile-home-top-slider/mobile-home-top-slider.module';
import { MobileHomeCalcButtonModule } from 'src/app/components/mobile-home-calc-button/mobile-home-calc-button.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MobileHeaderModule,
    MobileHomeTopMenuModule,
    MobileHomeTopSliderModule,
    MobileHomeCalcButtonModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
