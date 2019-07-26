import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  declarations: [PrivacyComponent],
  exports: [PrivacyComponent],
  entryComponents: [PrivacyComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PrivacyModule { }
