import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHomeProductsComponent } from './desktop-home-products.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DesktopHomeProductsComponent],
  exports: [DesktopHomeProductsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class DesktopHomeProductsModule { }
