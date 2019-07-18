import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTrainingMenuListComponent } from './home-training-menu-list.component';
import { IonicModule } from '@ionic/angular';
import { AdminPageEditButtonModule } from '../admin-page-edit-button/admin-page-edit-button.module';

@NgModule({
  declarations: [HomeTrainingMenuListComponent],
  exports: [HomeTrainingMenuListComponent],
  imports: [
    CommonModule,
    IonicModule,
    AdminPageEditButtonModule
  ]
})
export class HomeTrainingMenuListModule { }

