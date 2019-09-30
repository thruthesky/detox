import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutDetoxificationPage } from './about-detoxification.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { PagePostContentModule } from 'src/app/components/page-post-content/page-post-content.module';
import { AdminPageEditButtonModule } from 'src/app/components/admin-page-edit-button/admin-page-edit-button.module';

const routes: Routes = [
  {
    path: '',
    component: AboutDetoxificationPage
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
    PagePostContentModule,
    AdminPageEditButtonModule
  ],
  declarations: [AboutDetoxificationPage]
})
export class AboutDetoxificationPageModule { }
