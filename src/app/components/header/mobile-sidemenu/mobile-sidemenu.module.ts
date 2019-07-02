import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileSidemenuComponent } from './mobile-sidemenu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MobileSidemenuComponent],
  exports: [MobileSidemenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MobileSidemenuModule { }
