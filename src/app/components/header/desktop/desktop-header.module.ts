import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderComponent } from './desktop-header.component';

@NgModule({
  declarations: [ DesktopHeaderComponent ],
  exports: [ DesktopHeaderComponent ],
  imports: [
    CommonModule
  ]
})
export class DesktopHeaderModule { }
