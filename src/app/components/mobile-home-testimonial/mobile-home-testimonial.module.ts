import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileHomeTestimonialComponent } from './mobile-home-testimonial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ MobileHomeTestimonialComponent ],
  exports: [ MobileHomeTestimonialComponent ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class MobileHomeTestimonialModule { }
