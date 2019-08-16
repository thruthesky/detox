import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DesktopHomeFooterComponent } from './desktop-home-footer.component';
import { PagePostContentModule } from '../page-post-content/page-post-content.module';
import { AdminPageEditButtonModule } from '../admin-page-edit-button/admin-page-edit-button.module';

@NgModule({
  declarations: [DesktopHomeFooterComponent],
  exports: [DesktopHomeFooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagePostContentModule,
    AdminPageEditButtonModule,
  ]
})
export class DesktopHomeFooterModule { }
