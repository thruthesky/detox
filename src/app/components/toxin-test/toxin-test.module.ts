import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToxinTestComponent } from './toxin-test.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ToxinTestComponent],
  exports: [ToxinTestComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ToxinTestModule { }
