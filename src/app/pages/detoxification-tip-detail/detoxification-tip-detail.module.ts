import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetoxificationTipDetailPage } from './detoxification-tip-detail.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AdminPageEditButtonModule } from 'src/app/components/admin-page-edit-button/admin-page-edit-button.module';


const routes: Routes = [
  {
    path: '',
    component: DetoxificationTipDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    AdminPageEditButtonModule
  ],
  declarations: [DetoxificationTipDetailPage]
})
export class DetoxificationTipDetailPageModule { }
