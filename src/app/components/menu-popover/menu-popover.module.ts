import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPopoverComponent } from './menu-popover.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuPopoverComponent],
  exports: [MenuPopoverComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class MenuPopoverModule { }
