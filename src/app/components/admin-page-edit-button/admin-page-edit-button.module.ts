import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageEditButtonComponent } from './admin-page-edit-button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ AdminPageEditButtonComponent ],
  exports: [ AdminPageEditButtonComponent ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class AdminPageEditButtonModule { }