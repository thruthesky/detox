import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PrivacyComponent } from './privacy.component';
import { PagePostContentModule } from '../page-post-content/page-post-content.module';

@NgModule({
  declarations: [PrivacyComponent],
  exports: [PrivacyComponent],
  entryComponents: [PrivacyComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagePostContentModule,
  ]
})
export class PrivacyModule { }
