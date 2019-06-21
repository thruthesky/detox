import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileHomeProductsComponent } from './mobile-home-products.component';

@NgModule({
  declarations: [ MobileHomeProductsComponent ],
  exports: [ MobileHomeProductsComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MobileHomeProductsModule { }
