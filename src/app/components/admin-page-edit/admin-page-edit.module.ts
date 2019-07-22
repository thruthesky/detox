import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageEditComponent } from './admin-page-edit.component';
import { IonicModule } from '@ionic/angular';
import { IonPostEditModule } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.module';

@NgModule({
  declarations: [AdminPageEditComponent],
  exports: [AdminPageEditComponent],
  entryComponents: [AdminPageEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    IonPostEditModule
  ]
})
export class AdminPageEditModule { }
