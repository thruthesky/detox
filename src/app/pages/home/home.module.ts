import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MobileHomeTopMenuModule } from 'src/app/components/mobile-home-top-menu/mobile-home-top-menu.module';
import { MobileHomeTopSliderModule } from 'src/app/components/mobile-home-top-slider/mobile-home-top-slider.module';
import { MobileHomeCalcButtonModule } from 'src/app/components/mobile-home-calc-button/mobile-home-calc-button.module';
import { MobileHomeTestimonialModule } from 'src/app/components/mobile-home-testimonial/mobile-home-testimonial.module';
import { MobileHomeProductsModule } from 'src/app/components/mobile-home-products/mobile-home-products.module';
import { MobileHomeBottomButtonsModule } from 'src/app/components/mobile-home-bottom-buttons/mobile-home-bottom-buttons.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeTopSliderModule } from 'src/app/components/desktop-home-top-slider/desktop-home-top-slider.module';
import { DesktopHomeTestimonialModule } from 'src/app/components/desktop-home-testimonial/desktop-home-testimonial.module';
import { DesktopHomeProductsModule } from 'src/app/components/desktop-home-products/desktop-home-products.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { DesktopHomeCalcButtonModule } from 'src/app/components/desktop-home-calc-button/desktop-home-calc-button.module';

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
    HeaderModule,
    MobileHomeTopMenuModule,
    MobileHomeTopSliderModule,
    MobileHomeCalcButtonModule,
    MobileHomeTestimonialModule,
    MobileHomeProductsModule,
    MobileHomeBottomButtonsModule,
    DesktopHomeTopSliderModule,
    DesktopHomeCalcButtonModule,
    DesktopHomeTestimonialModule,
    DesktopHomeProductsModule,
    DesktopHomeFooterModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
