import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditDiaryPage } from './edit-diary.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { IonPostEditModule } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.module';

const routes: Routes = [
  {
    path: '',
    component: EditDiaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    DesktopHomeFooterModule,
    IonPostEditModule
  ],
  declarations: [EditDiaryPage]
})
export class EditDiaryPageModule {}
