import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'modules/wordpress-api/wordpress-api.interface';
import { AlertController, IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {



  submit = false;
  form: FormGroup;
  user: User;
  validationMessages: any = {};

  imageOptions: any = {
    header: 'Choose Option',
  };
  
  genderOptions: any = {
    header: 'Choose Gender'
  };

  constructor(
    public a: AppService,
    fb: FormBuilder,
    private alert: AlertController
  ) {

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



}

