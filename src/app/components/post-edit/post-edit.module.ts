import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditComponent } from './post-edit.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostEditComponent],
  exports: [PostEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class PostEditModule { }
