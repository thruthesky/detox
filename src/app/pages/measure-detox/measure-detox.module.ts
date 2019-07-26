import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeasureDetoxPage } from './measure-detox.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { ToxinTestModule } from 'src/app/components/toxin-test/toxin-test.module';
import { BeemanTestModule } from 'src/app/components/beeman-test/beeman-test.module';

const routes: Routes = [
  {
    path: '',
    component: MeasureDetoxPage
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
    ToxinTestModule,
    BeemanTestModule,
  ],
  declarations: [MeasureDetoxPage]
})
export class MeasureDetoxPageModule {}
