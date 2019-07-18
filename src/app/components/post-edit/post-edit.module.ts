import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditComponent } from './post-edit.component';

@NgModule({
  declarations: [PostEditComponent],
  exports: [PostEditComponent],
  imports: [
    CommonModule
  ]
})
export class PostEditModule { }
