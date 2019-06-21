import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderComponent } from './desktop-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ DesktopHeaderComponent ],
  exports: [ DesktopHeaderComponent ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class DesktopHeaderModule { }
