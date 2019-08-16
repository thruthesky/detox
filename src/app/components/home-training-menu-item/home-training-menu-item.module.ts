import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTrainingMenuItemComponent } from './home-training-menu-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HomeTrainingMenuItemComponent],
  exports: [HomeTrainingMenuItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class HomeTrainingMenuItemModule { }
