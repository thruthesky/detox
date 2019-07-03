import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DesktopHomeTestimonialComponent } from './desktop-home-testimonial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DesktopHomeTestimonialComponent],
  exports: [DesktopHomeTestimonialComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class DesktopHomeTestimonialModule { }
