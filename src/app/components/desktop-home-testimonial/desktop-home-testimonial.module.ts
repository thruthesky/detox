import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DesktopHomeTestimonialComponent } from './desktop-home-testimonial.component';

@NgModule({
  declarations: [DesktopHomeTestimonialComponent],
  exports: [DesktopHomeTestimonialComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class DesktopHomeTestimonialModule { }
