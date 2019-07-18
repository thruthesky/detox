import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { UserRegisterOptions } from 'modules/wordpress-api/wordpress-api.interface';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  submit = false;
  form: FormGroup;
  // formKeys: string[] = [];
  // errors: any = {};
  validationMessages: any = {};


  subscriptionUserChange = new Subscription();

  constructor(
    fb: FormBuilder,
    public a: AppService,
    private alert: AlertController
  ) {



    this.form = fb.group({
      user_pass: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(64)]],
      user_pass_confirm: ['', [Validators.required, (el: AbstractControl) => {
        if (el.dirty) {
          if (el.value === this.form.get('user_pass').value) {
            return null;
          }
          return { passwordNotMatch: true };
        }
        return null;
      }
      ]],
      user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      display_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9+]*'), Validators.minLength(8), Validators.maxLength(15)]],
      gender: ['', [Validators.required]],
      agree: ['', [Validators.required]],
    });

    this.validationMessages = {
      user_pass: {
        required: a.t({ en: 'Password is required.', ko: '비밀번호는 필수 입력 항목입니다.' }),
        minlength: a.t({ en: 'Password is too short.', ko: '비밀번호가 너무 짧습니다.' }),
        maxlength: a.t({ en: 'Password is too long.', ko: '비밀번호가 너무 깁니다.' })
      },
      user_pass_confirm: {
        required: a.t({ en: 'Password confirm is required.', ko: '비밀번호 확인은 필수 입력 항목입니다.' }),
        // minlength: a.t({ en: 'Password is too short.', ko: '비밀번호가 너무 짧습니다.' }),
        // maxlength: a.t({ en: 'Password is too long.', ko: '비밀번호가 너무 깁니다.' }),
        // pattern: a.t({ en: 'Password and Confirm Password does not match.', ko: '비밀번호가 너무 깁니다.' }),
        passwordNotMatch: 'Password confirm does not match to password!'
      },
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
        pattern: a.t({ en: 'Please input a valid number', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
        minLength: a.t({ en: 'Mobile No. is too short.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
        maxLength: a.t({ en: 'Mobile No. is too long.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
      },
      gender: {
        required: a.t({ en: 'Gender selection is required.', ko: '성별 선택은 필수 선택 항목입니다.' }),
      },
      agree: {
        required: a.t({ en: 'Terms and Conditions is required.', ko: '이용 약관이 필요합니다.' }),
      },

    };

    this.form.get('user_pass').valueChanges.subscribe(e => {
      console.log('listen user_pass changes');
      this.form.get('user_pass_confirm').updateValueAndValidity({ onlySelf: true });
    });


  }




  get title(): string {
    if (this.a.wp.userIsLoggedIn) {
      return this.a.t({ en: 'Profile', ko: '회원정보' });
    } else {
      return this.a.t({ en: 'Register', ko: '회원가입' });
    }
  }



  onSubmit() {
    this.submit = true;
    console.log('onSubmit()');

    // If there is any invalid form element
    if (this.form.invalid) {
      // Display errors and return ( don't submit )
      // Display errors on not-dirty elements also.
      // this.validate(false);
      console.log('form invalid');
      return;
    }


    const data: UserRegisterOptions = {
      user_login: this.form.value.user_email,
      user_pass: this.form.value.user_pass,
      user_email: this.form.value.user_email,
      display_name: this.form.value.display_name,
      mobile: this.form.value.mobile,
      gender: this.form.value.gender
    };

    console.log('request data: ', data);
    this.a.wp.register(data).subscribe(async (res) => {
      console.log('register success: ', res);

      (await this.alert.create({
        header: this.a.t({ en: 'Register Success', ko: '회원가입을 축하드립니다.' }),
        message: this.a.t({ en: 'Please upload your picture.', ko: '회원 정보를 업데이트 해 주시거나 프로그램에 참여를 해 보세요 ^^;' }),
        buttons: [this.a.t({ en: 'Okay', ko: '확인' })]
      })).present();
      this.a.openHome();
    }, e => this.a.error(e));



  }

  ngOnInit() {

    // this.a.wp.logout();

    // setTimeout(() => {
    //   this.form.setValue({
    //     user_email: 'Yo.myemail' + ((new Date()).getTime() / 1000) + '@gmail.com',
    //     user_pass: 'oooyohi',
    //     user_pass_confirm: 'then',
    //     display_name: 'di name',
    //     mobile: '010-1234-4667',
    //     gender: 'F',
    //     agree: true
    //   });


    //   // this.form.patchValue({ user_email: 'hi@email.com' });

    //   this.onSubmit();
    // }, 100);

  }


  ngOnDestroy() {
    if (this.subscriptionUserChange) {
      this.subscriptionUserChange.unsubscribe();
    }
  }


  errors(formName: string): any {
    return this.form.get(formName).errors;
  }


  ionViewDidLeave() {
    this.form.reset();
  }





}





