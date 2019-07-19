import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditComponent } from './post-edit.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PostEditComponent],
  exports: [PostEditComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PostEditModule { }
