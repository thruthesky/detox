import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CameraPopoverComponent } from './camera-popover.component';

@NgModule({
  declarations: [CameraPopoverComponent],
  exports: [CameraPopoverComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class CameraPopoverModule { }
