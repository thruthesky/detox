import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageEditButtonComponent } from './admin-page-edit-button.component';
import { IonicModule } from '@ionic/angular';
import { IonPostEditModule } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.module';

@NgModule({
  declarations: [ AdminPageEditButtonComponent ],
  exports: [ AdminPageEditButtonComponent ],
  imports: [
    CommonModule,
    IonicModule,
    // AdminPageEditModule,
    IonPostEditModule
  ]
})
export class AdminPageEditButtonModule { }
