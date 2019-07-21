import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestimonialPage } from './testimonial.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { IonPostListModule } from 'modules/wordpress-api/ionic/components/forum/ion-post-list/ion-post-list.module';

const routes: Routes = [
  {
    path: '',
    component: TestimonialPage
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
  declarations: [TestimonialPage]
})
export class TestimonialPageModule {}
