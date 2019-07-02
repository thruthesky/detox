import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MobileHeaderComponent } from './mobile-header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ MobileHeaderComponent ],
  exports: [ MobileHeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class MobileHeaderModule { }

