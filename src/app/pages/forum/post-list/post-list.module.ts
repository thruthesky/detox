import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostListPage } from './post-list.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { IonPostListModule } from 'modules/wordpress-api/ionic/components/forum/ion-post-list/ion-post-list.module';

const routes: Routes = [
  {
    path: '',
    component: PostListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
    IonPostListModule
  ],
  declarations: [PostListPage]
})
export class PostListPageModule {}
