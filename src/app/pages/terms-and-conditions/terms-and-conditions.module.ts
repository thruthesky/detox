import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermsAndConditionsPage } from './terms-and-conditions.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';

const routes: Routes = [
  {
    path: '',
    component: TermsAndConditionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    DesktopHomeFooterModule
  ],
  declarations: [TermsAndConditionsPage]
})
export class TermsAndConditionsPageModule {}
