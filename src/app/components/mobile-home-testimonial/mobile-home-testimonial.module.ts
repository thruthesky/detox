import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileHomeTestimonialComponent } from './mobile-home-testimonial.component';

@NgModule({
  declarations: [ MobileHomeTestimonialComponent ],
  exports: [ MobileHomeTestimonialComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MobileHomeTestimonialModule { }
