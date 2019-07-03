import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileHomeProductsComponent } from './mobile-home-products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ MobileHomeProductsComponent ],
  exports: [ MobileHomeProductsComponent ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class MobileHomeProductsModule { }
