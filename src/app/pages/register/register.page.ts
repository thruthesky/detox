import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'modules/wordpress-api/wordpress-api.interface';
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
    private fb: FormBuilder,
    public a: AppService
  ) {

    this.form = fb.group({
      user_login: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      user_pass: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      display_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]]
    });
    this.formKeys = Object.keys(this.form.value);
    this.validationMessages = {
      user_login: {
        required: a.t({ en: 'Login ID is required.', ko: '회원아이디는 필수 입력 항목입니다.' }),
        minlength: a.t({ en: 'Login ID is too short.', ko: '아이디의 길이가 너무 짧습니다.' }),
        maxlength: a.t({ en: 'Login ID is too long.', ko: '아이디의 길이가 너무 깁니다.' })
      },
      user_pass: {
        required: a.t({ en: 'Password is required.', ko: '비밀번호는 필수 입력 항목입니다.' }),
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
      }
    };

    // 폼의 항목 중 하나라도 변경되면, 이 이벤트가 발생한다.
    this.form.valueChanges.subscribe(res => {
      if (!this.form) {
        return;
      }
      this.validate();
    });

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
    const form = this.formKeys.reduce((t, k) => {
      t[k] = this.form.get(k).value;
      return t;
    }, {});
    console.log('form values', form);

  }

  ngOnInit() {
  }

}




