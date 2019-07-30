import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChildProtectionPage } from './child-protection.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DesktopHomeFooterModule } from 'src/app/components/desktop-home-footer/desktop-home-footer.module';
import { PagePostContentModule } from 'src/app/components/page-post-content/page-post-content.module';

const routes: Routes = [
  {
    path: '',
    component: ChildProtectionPage
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
  ],
  declarations: [ChildProtectionPage]
})
export class ChildProtectionPageModule {}
