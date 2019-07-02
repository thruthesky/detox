import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderComponent } from './desktop-header.component';
import { IonicModule } from '@ionic/angular';
import { MenuPopoverComponent } from '../../menu-popover/menu-popover.component';
import { MenuPopoverModule } from '../../menu-popover/menu-popover.module';
import { RouterModule } from '@angular/router';

@NgModule({
  entryComponents: [MenuPopoverComponent],
  declarations: [ DesktopHeaderComponent ],
  exports: [ DesktopHeaderComponent ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    MenuPopoverModule
    
  ]
})
export class DesktopHeaderModule { }
