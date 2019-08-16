import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTrainingMenuItemComponent } from './home-training-menu-item.component';
import { IonicModule } from '@ionic/angular';
import { PagePostContentModule } from '../page-post-content/page-post-content.module';



@NgModule({
  declarations: [HomeTrainingMenuItemComponent],
  exports: [HomeTrainingMenuItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    PagePostContentModule,
  ]
})
export class HomeTrainingMenuItemModule { }
