import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { IonPostEditModule } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.module';
import { IonPopoverButtonsModule } from 'modules/wordpress-api/components/shared/ion-popover-buttons/ion-popover-buttons.module';
import { IonFileDisplayModule } from 'modules/wordpress-api/components/shared/ion-file-display/ion-file-display.module';
import { IonCommentEditBoxModule } from 'modules/wordpress-api/components/forum/ion-comment-edit-box/ion-comment-edit-box.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
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
    IonPostEditModule,
    IonPopoverButtonsModule,
    IonFileDisplayModule,
    IonCommentEditBoxModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
