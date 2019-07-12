import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'modules/wordpress-api/wordpress-api.interface';
import { AlertController, PopoverController, IonSelect } from '@ionic/angular';
import { MyPromiseComponent } from 'src/app/components/my-promise/my-promise.component';
import { CameraPopoverComponent } from 'src/app/components/camera-popover/camera-popover.component';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  imgProfile: SafeResourceUrl;

  @ViewChild('file') file: ElementRef;



  submit = false;
  form: FormGroup;
  user: User;
  validationMessages: any = {};

  imageOptions: any = {
    header: 'Choose Option',
    cssClass: 'no-underline-on-last-item no-radio-button list-header-bold list-header-fs-18px list-header-green pop-medium  list-header-bottom-border ion-item-pointer'
  };

  genderOptions: any = {
    header: 'Choose Gender',
    cssClass: 'no-underline-on-last-item list-header-bold list-header-fs-18px list-header-green pop-medium  list-header-bottom-border ion-item-pointer'

  };

  constructor(
    public a: AppService,
    public sanitizer: DomSanitizer,
    public fb: FormBuilder,
    private alert: AlertController,
    public popoverController: PopoverController
  ) {


    this.imgProfile = "data:image/png;base64,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";


    a.wp.profile().subscribe(user => {


      /**
       * @todo set all the form data.
       */
      this.form.patchValue({
        display_name: user.display_name,
        user_email: user.user_email,
        mobile: user.mobile,
        gender: user.gender,
        address: user.address,
        birthday: user.birthday,
        height: user.height,
        weight: user.weight,
      });

    }, e => a.error(e));


    /**
     * @note
     */
    this.form = fb.group({
      photo: [''],
      display_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      mobile: ['', [Validators.required, Validators.pattern(`[0-9+\\- ]*`)]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      height: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.min(100), Validators.max(220)]],
      weight: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.min(30), Validators.max(160)]]
    });

    // this.formKeys = Object.keys(this.form.value);

    this.validationMessages = {
      user_email: {
        required: a.t({ en: 'Email is required.', ko: '이메일 주소는 필수 입력 항목입니다.' }),
        minlength: a.t({ en: 'Email is too short.', ko: '이메일 주소가 너무 짧습니다.' }),
        maxlength: a.t({ en: 'Email is too long.', ko: '이메일 주소가 너무 깁니다.' })
      },
      display_name: {
        required: a.t({ en: 'Nickname is required.', ko: '닉네임은 필수 입력 항목입니다.' }),
        minlength: a.t({ en: 'Nickname is too short.', ko: '닉네임이 너무 짧습니다.' }),
        maxlength: a.t({ en: 'Nickname is too long.', ko: '닉네임이 너무 깁니다.' })
      },
      mobile: {
        required: a.t({ en: 'Mobile No. is required.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
        pattern: a.t({ en: 'Mobile No. is malformed.', ko: '핸드폰 번호가 올바르지 않습니다.' }),
      },
      gender: {
        required: a.t({ en: 'Gender is required.', ko: '성별은 필수 선택항목입니다.' }),
      },
      address: {
        required: a.t({ en: 'Address is required.', ko: '주소는 필수 입력 항목입니다.' }),
      },
      birthday: {
        required: a.t({ en: 'Birthday is required.', ko: '생년월일은 필수 입력 항목입니다.' }),
      },
      height: {
        required: a.t({ en: 'Height is required.', ko: '키는 필수 입력 항목입니다.' }),
        pattern: a.t({ en: 'Please input number only.', ko: '숫자만 입력해주세요.' }),
        min: a.t({ en: 'Height is too low.', ko: '키가 너무 작습니다.' }),
        max: a.t({ en: 'Height is too high.', ko: '키가 너무 큽니다.' }),
      },

      weight: {
        required: a.t({ en: 'Weight is required.', ko: '몸무게는 필수 입력 항목입니다.' }),
        pattern: a.t({ en: 'Please input number only.', ko: '숫자만 입력해 주세요.' }),
        min: a.t({ en: 'Weight is too low.', ko: '몸무게가 너무 낮습니다.' }),
        max: a.t({ en: 'Weight is too high.', ko: '몸무게가 너무 높습니다.' }),
      }
    };

  }

  errors(formName: string): any {
    return this.form.get(formName).errors;
  }

  allErrors() {
    const err = [];
    Object.keys(this.validationMessages).map(formName => {
      const errors = this.form.get(formName).errors;
      if (errors) {
        Object.keys(errors).map(errorCode => {
          err.push(this.validationMessages[formName][errorCode]);
        });
      }
    });
    return err;
  }

  ngOnInit() {
  }

  onSubmit() {

    this.submit = true;

    if (this.form.invalid) {
      console.log('onSubmit() => form is invalid. just return. not submitting');
      return;
    }
    const reqData: User = {
      address: this.form.value.address,
      display_name: this.form.value.display_name,
      mobile: this.form.value.mobile,
      gender: this.form.value.gender,
      birthday: this.form.value.birthday,
      height: this.form.value.height,
      weight: this.form.value.weight
    };

    this.a.wp.profileUpdate(reqData).subscribe(async (res) => {

      console.log('user update: ', res);
      (await this.alert.create({
        header: this.a.t({ en: 'update Success', ko: '업데이트 성공.' }),
        // message: this.a.t({ en: 'Please upload your picture.', ko: '회원 정보를 업데이트 해 주시거나 프로그램에 참여를 해 보세요 ^^;' }),
        buttons: [this.a.t({ en: 'Okay', ko: '확인' })]
      })).present();

      this.a.openHome();
    });
  }

  async onClickMyPromise(ev: any) {
    
    const popover = await this.popoverController.create({
      component: MyPromiseComponent,
      event: ev,
      cssClass: 'promise-pop-width promise-pop-height popover-center-promise  ',
    });
    await popover.present();
    const data = await popover.onWillDismiss();
    console.log('data: ', data);
  }

  async onClickCamera() {
      await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      correctOrientation: true,

    }).then(
      data => {
          this.imgProfile = this.sanitizer.bypassSecurityTrustResourceUrl(data && (data.dataUrl));
      },err => {
        console.log('error:',err);
      }
    );
  }


  async showCameraOptions(ev: any) {
    const popover = await this.popoverController.create({
      component: CameraPopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'popover-center ',
    
    });
    popover.present();
    return await popover.onDidDismiss().then(option => {
      if( option.data === 'camera') {
        this.onClickCamera();
      } 
      if( option.data === 'upload') {
        this.file.nativeElement.click();
      }  
    })
  }

  onChangeFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imgProfile =  this.sanitizer.bypassSecurityTrustResourceUrl(event.target['result']);
      }
    }
  }

}

