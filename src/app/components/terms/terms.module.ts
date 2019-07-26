import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TermsComponent } from './terms.component';

@NgModule({
  declarations: [TermsComponent],
  exports: [TermsComponent],
  entryComponents: [TermsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class TermsModule { }
