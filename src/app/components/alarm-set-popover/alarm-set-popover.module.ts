import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmSetPopoverComponent } from './alarm-set-popover.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AlarmSetPopoverComponent],
  exports: [AlarmSetPopoverComponent],
  entryComponents: [AlarmSetPopoverComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class AlarmSetPopoverModule { }
