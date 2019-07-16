import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { UserRegisterOptions } from 'modules/wordpress-api/wordpress-api.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

    // this.subscriptionUserChange = this.a.wp.userChange.subscribe(user => {
    //   if (user) {
    //     this.a.wp.profile().subscribe(profile => {
    //       console.log('profile: ', profile);
    //       this.form.patchValue({
    //         user_email: profile.user_email,
    //         display_name: profile.display_name,
    //         mobile: profile.mobile,
    //         gender: profile.gender
    //       });
    //     }, e => this.a.error(e));
    //   } else {
    //     this.form.reset()
    //   }
    // });


    this.form = fb.group({
      user_pass: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      user_pass_confirm: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      display_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9+]*'), Validators.minLength(8), Validators.maxLength(15)]],
      gender: ['', [Validators.required]],
      agree: ['', [Validators.required]],
    });

    // this.formKeys = Object.keys(this.form.value);
    this.validationMessages = {
      user_pass: {
        required: a.t({ en: 'Password is required.', ko: '비밀번호는 필수 입력 항목입니다.' }),
        minlength: a.t({ en: 'Password is too short.', ko: '비밀번호가 너무 짧습니다.' }),
        maxlength: a.t({ en: 'Password is too long.', ko: '비밀번호가 너무 깁니다.' })
      },
      user_pass_confirm: {
        required: a.t({ en: 'Password confirm is required.', ko: '비밀번호 확인은 필수 입력 항목입니다.' }),
        minlength: a.t({ en: 'Password is too short.', ko: '비밀번호가 너무 짧습니다.' }),
        maxlength: a.t({ en: 'Password is too long.', ko: '비밀번호가 너무 깁니다.' })
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
        required: a.t({ en: 'You must agree in the terms and conditions.', ko: '이용 약관에 동의해야합니다.' }),
      },
   
    };

    // 폼의 항목 중 하나라도 변경되면, 이 이벤트가 발생한다.
    // this.form.valueChanges.subscribe(res => {
    //   console.log('form: ', this.form.value);
    //   if (!this.form) {
    //     return;
    //   }
    //   // this.validate();
    // });



  }




  get title(): string {
    if (this.a.wp.userIsLoggedIn) {
      return this.a.t({ en: 'Profile', ko: '회원정보' });
    } else {
      return this.a.t({ en: 'Register', ko: '회원가입' });
    }
  }



  async onSubmit() {
    this.submit = true;
    console.log('onSubmit()');

    // If there is any invalid form element
    if (this.form.invalid) {
      // Display errors and return ( don't submit )
      // Display errors on not-dirty elements also.
      // this.validate(false);
      return;
    }

    const re = await this.presentTermsAndConditionsAlert();
    if ( re.role === 'cancel' ) {
      alert('You must agree to register');
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

  async presentTermsAndConditionsAlert() {
    const alert = await this.alert.create({
      header: 'Terms and Conditions',
      message: 'By creating an account, you agree to the 7Detox  <a href="/terms-and-conditions" target="_blank" >Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>',
      cssClass: 'i-width-340px ',
      mode: 'ios',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
              return;
          }
        }, {
          text: 'Agree',
          role: 'agree',
          cssClass: 'green'
        }
      ]
    });

    await alert.present();
    return await alert.onWillDismiss();
  }




}





