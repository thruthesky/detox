import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlarmListPage } from './alarm-list.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AlarmSetPopoverModule } from 'src/app/components/alarm-set-popover/alarm-set-popover.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';

const routes: Routes = [
  {
    path: '',
    component: AlarmListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    AlarmSetPopoverModule,
    DesktopHomeFooterModule
  ],
  declarations: [AlarmListPage]
})
export class AlarmListPageModule {}
