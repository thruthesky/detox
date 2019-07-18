import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageEditComponent } from './admin-page-edit.component';
import { PostEditModule } from '../post-edit/post-edit.module';

@NgModule({
  declarations: [AdminPageEditComponent],
  exports: [AdminPageEditComponent],
  entryComponents: [AdminPageEditComponent],
  imports: [
    CommonModule,
    PostEditModule
  ]
})
export class AdminPageEditModule { }
