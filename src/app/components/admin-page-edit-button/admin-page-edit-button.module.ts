import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageEditButtonComponent } from './admin-page-edit-button.component';
import { IonicModule } from '@ionic/angular';
import { AdminPageEditModule } from '../admin-page-edit/admin-page-edit.module';

@NgModule({
  declarations: [ AdminPageEditButtonComponent ],
  exports: [ AdminPageEditButtonComponent ],
  imports: [
    CommonModule,
    IonicModule,
    AdminPageEditModule
  ]
})
export class AdminPageEditButtonModule { }
