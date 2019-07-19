import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-file-upload-popover',
  templateUrl: './file-upload-popover.component.html',
  styleUrls: ['./file-upload-popover.component.scss'],
})
export class FileUploadPopoverComponent implements OnInit {


  
  uploadPercent: number;
 

  constructor(
    public a: AppService,
    public popoverController: PopoverController,
  ) { }

  ngOnInit() { }

  onClickImgOption(option: string) {
    this.popoverController.dismiss(option);
  }


  async onClickCamera() {
    await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      correctOrientation: true,
    }).then(data => {
      console.log('data: ', data);
      if (data && (data.base64String)) {
        console.log('I got base64 from camera: ', data.base64String);

        // console.log('path: ', data);
        const blob = this.b64toBlob(data.base64String);
        /**
         * File 와 FileList 타입의 변수를 만든다.
         * 그리고 그냥 일반 HTML FORM <input type='file'> 에서 파일 정보를 받아 업로드하는 것과 똑 같이 하면 된다.
         */
        const d = new Date();
        const name = d.getFullYear() + (d.getMonth() + 1) + d.getDate() + '-' + d.getHours() + d.getMinutes() + d.getSeconds();
        const file = new File([blob], name + '.jpg', { type: 'image/jpeg' });
        const files: FileList = [file] as any;

        this.a.wp.fileUpload(files, {}).subscribe((res) => this.successOnFileUpload(res), e => this.a.error(e));

      }
    }, err => {
      console.log('error:', err);
    }
    );
  }

  onChangeFile(event: any) {
    this.a.wp.fileUpload(event.target.files, {}).subscribe((res) => this.successOnFileUpload(res), e => this.a.error(e));
  }

  successOnFileUpload(res) {
    if (typeof res === 'number') {
      this.uploadPercent = res;
      console.log('upload percentage: ', res);
      

    } else {
      // console.log('success: ', res);
      this.popoverController.dismiss(res, 'fileUpload');
    }

  }
  // errorOnFileUpload(e: any) {

  //   console.log('onChangeFile() => error: ', e);
  //   this.a.error(e);

  // }


  /**
   *
   * Base64 데이터를 바이너리로 변경해서 리턴한다.
   *
   */
  b64toBlob(b64Data: any, contentType = 'image/jpeg', sliceSize = 512): Blob {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }



}
