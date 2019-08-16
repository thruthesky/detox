import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeTrainingPage } from './home-training.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HomeTrainingMenuListModule } from 'src/app/components/home-training-menu-list/home-training-menu-list.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { HomeTrainingMenuModule } from 'src/app/components/home-training-menu/home-training-menu.module';
import { HomeTrainingMenuItemModule } from 'src/app/components/home-training-menu-item/home-training-menu-item.module';

const routes: Routes = [
  {
    path: '',
    component: HomeTrainingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    HomeTrainingMenuListModule,
    HomeTrainingMenuItemModule,
    DesktopHomeFooterModule,
    HomeTrainingMenuModule
  ],
  declarations: [HomeTrainingPage]
})
export class HomeTrainingPageModule {}
