import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DesktopHomeFooterComponent } from './desktop-home-footer.component';

@NgModule({
  declarations: [DesktopHomeFooterComponent],
  exports: [DesktopHomeFooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class DesktopHomeFooterModule { }
