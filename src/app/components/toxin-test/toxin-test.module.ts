import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToxinTestComponent } from './toxin-test.component';
import { IonicModule } from '@ionic/angular';
import { AdminPageEditButtonModule } from '../admin-page-edit-button/admin-page-edit-button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToxinTestComponent],
  exports: [ToxinTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageEditButtonModule
  ]
})
export class ToxinTestModule { }
