import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHomeProductsComponent } from './desktop-home-products.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DesktopHomeProductsComponent],
  exports: [DesktopHomeProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ]
})
export class DesktopHomeProductsModule { }
