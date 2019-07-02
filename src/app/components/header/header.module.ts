import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderModule } from './mobile-header/mobile-header.module';
import { DesktopHeaderModule } from './desktop-header/desktop-header.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    MobileHeaderModule,
    DesktopHeaderModule
  ]
})
export class HeaderModule { }
