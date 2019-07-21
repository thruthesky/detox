import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditComponent } from './post-edit.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadPopoverModule } from '../file-upload-popover/file-upload-popover.module';

@NgModule({
  declarations: [PostEditComponent],
  exports: [PostEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FileUploadPopoverModule
  ]
})
export class PostEditModule { }
