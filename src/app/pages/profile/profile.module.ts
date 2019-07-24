import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { MyPromiseModule } from 'src/app/components/my-promise/my-promise.module';
import { IonFileUploadPopoverModule } from 'modules/wordpress-api/components/shared/ion-file-upload-popover/ion-file-upload-popover.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    DesktopHomeFooterModule,
    MyPromiseModule,
    IonFileUploadPopoverModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
