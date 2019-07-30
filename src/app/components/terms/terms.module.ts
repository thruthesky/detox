import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TermsComponent } from './terms.component';
import { PagePostContentModule } from '../page-post-content/page-post-content.module';

@NgModule({
  declarations: [TermsComponent],
  exports: [TermsComponent],
  entryComponents: [TermsComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagePostContentModule
  ]
})
export class TermsModule { }
