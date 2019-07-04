import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User, UserRegister } from 'modules/wordpress-api/wordpress-api.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  form: FormGroup;
  formKeys: string[] = [];
  errors: any = {};
  validationMessages: any = {};

  user: User = {} as User;
  constructor(
    fb: FormBuilder,
    public a: AppService
  ) {

    this.form = fb.group({
      user_pass: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      user_pass_confirm: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      display_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      gender: ['', [Validators.required]],
      agree: [null, [Validators.required]]
    });

    this.formKeys = Object.keys(this.form.value);
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
      gender: {
        required: a.t({ en: 'Gender selection is required.', ko: '성별 선택은 필수 항목입니다.' }),
      },
      agree: {
        required: a.t({ en: 'Terms & Condition selection is required.', ko: '가입약관 동의 선택은 필수 항목입니다.' }),
      }
    };

    // 폼의 항목 중 하나라도 변경되면, 이 이벤트가 발생한다.
    this.form.valueChanges.subscribe(res => {
      console.log('form: ', this.form.value);
      if (!this.form) {
        return;
      }
      this.validate();
    });



  }


  get title(): string {
    return this.a.t({ en: 'Register', ko: '회원가입' });
  }
  // 폼을 검사한다.
  // 기본적으로 dirty 상태인 것만 검사를 한다.
  validate(dirty = true) {
    const form = this.form;
    for (const field of this.formKeys) {
      const control = form.get(field);
      this.errors[field] = '';
      if (dirty) {
        if (control && control.dirty && !control.valid) {
          Object.keys(control.errors).map(key => this.errors[field] += this.validationMessages[field][key] + ' ');

        }
      } else {
        if (control && !control.valid) {
          Object.keys(control.errors).map(key => this.errors[field] += this.validationMessages[field][key] + ' ');
        }
      }
    }
  }

  onSubmit() {
    console.log('onSubmit()');

    // If there is any invalid form element
    if (this.form.invalid) {
      // Display errors and return ( don't submit )
      // Display errors on not-dirty elements also.
      this.validate(false);
      return;
    }

    // get form data.
    // const form = this.formKeys.reduce((t, k) => {
    //   t[k] = this.form.get(k).value;
    //   return t;
    // }, {});
    // console.log('form values', form);


    const data: UserRegister = {
      user_login: this.form.value.user_email,
      user_pass: this.form.value.user_pass,
      user_email: this.form.value.user_email,
      display_name: this.form.value.display_name,
    };

    console.log('request data: ', data);
    this.a.wp.register(data).subscribe(res => {
      console.log('register result: ', res);
    }, e => console.error(e));

  }

  ngOnInit() {

  }

}




