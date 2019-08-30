import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetoxificationDiaryPage } from './detoxification-diary.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { PagePostContentModule } from 'src/app/components/page-post-content/page-post-content.module';
import { JoinMenuModule } from 'src/app/components/join-menu/join-menu.module';

const routes: Routes = [
  {
    path: '',
    component: DetoxificationDiaryPage
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
    JoinMenuModule
  ],
  declarations: [DetoxificationDiaryPage]
})
export class DetoxificationDiaryPageModule {}
