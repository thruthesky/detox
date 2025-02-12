import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetoxificationTipPage } from './detoxification-tip.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { AdminPageEditButtonModule } from 'src/app/components/admin-page-edit-button/admin-page-edit-button.module';

const routes: Routes = [
  {
    path: '',
    component: DetoxificationTipPage
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
    AdminPageEditButtonModule
  ],
  declarations: [DetoxificationTipPage]
})
export class DetoxificationTipPageModule {}
