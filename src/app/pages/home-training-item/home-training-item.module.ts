import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeTrainingItemPage } from './home-training-item.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { HomeTrainingMenuModule } from 'src/app/components/home-training-menu/home-training-menu.module';

const routes: Routes = [
  {
    path: '',
    component: HomeTrainingItemPage
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
    HomeTrainingMenuModule
  ],
  declarations: [HomeTrainingItemPage]
})
export class HomeTrainingItemPageModule {}
