import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostViewPage } from './post-view.page';
import { HeaderModule } from 'src/app/components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: PostViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [PostViewPage]
})
export class PostViewPageModule {}
