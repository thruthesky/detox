import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BeemanTestComponent } from './beeman-test.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BeemanTestComponent],
  exports: [BeemanTestComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class BeemanTestModule { }
