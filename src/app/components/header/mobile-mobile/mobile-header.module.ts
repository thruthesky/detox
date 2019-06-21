import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileHeaderComponent } from './mobile-header.component';

@NgModule({
  declarations: [ MobileHeaderComponent ],
  exports: [ MobileHeaderComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MobileHeaderModule { }

