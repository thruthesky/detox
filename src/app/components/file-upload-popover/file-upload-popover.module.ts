import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FileUploadPopoverComponent } from './file-upload-popover.component';


@NgModule({
  declarations: [FileUploadPopoverComponent],
  exports: [FileUploadPopoverComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  entryComponents: [FileUploadPopoverComponent]
})
export class FileUploadPopoverModule { }
