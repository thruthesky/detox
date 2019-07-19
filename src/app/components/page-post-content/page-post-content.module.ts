import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePostContentComponent } from './page-post-content.component';
import { IonicModule } from '@ionic/angular';
import { AdminPageEditButtonModule } from '../admin-page-edit-button/admin-page-edit-button.module';

@NgModule({
  declarations: [ PagePostContentComponent ],
  exports: [ PagePostContentComponent ],
  imports: [
    CommonModule,
    IonicModule,
    AdminPageEditButtonModule
  ]
})
export class PagePostContentModule { }
