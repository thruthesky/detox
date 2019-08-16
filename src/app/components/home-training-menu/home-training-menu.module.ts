import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeTrainingMenuComponent } from './home-training-menu.component';



@NgModule({
  declarations: [HomeTrainingMenuComponent],
  exports: [HomeTrainingMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class HomeTrainingMenuModule { }

