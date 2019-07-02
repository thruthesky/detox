import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileSidemenuComponent } from './mobile-sidemenu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MobileSidemenuComponent],
  exports: [MobileSidemenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ]
})
export class MobileSidemenuModule { }
