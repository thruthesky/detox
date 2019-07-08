import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterOptions, UserProfile } from 'modules/wordpress-api/wordpress-api.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  form: FormGroup;
  errors: any = {};
  formKeys: string[] = [];
  user: UserProfile;
  validationMessages: any = {};

  constructor(
    public a: AppService,
    fb: FormBuilder,

  ) {
    a.wp.profile().subscribe(user => {
      console.log('user', user);

      /**
       * @todo set all the form data.
       */
      this.form.patchValue({
        display_name: user.display_name,
        user_email: user.user_email,
        mobile: user.mobile,
        gender: user.gender,
      });
      this.user = user;

    }, e => a.error(e));


    /**
     * @note
     */
    this.form = fb.group({
      display_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      mobile: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]]
    });

    this.formKeys = Object.keys(this.form.value);

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
      },
      gender: {
        required: a.t({ en: 'Gender No. is required.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
      },
      address: {
        required: a.t({ en: 'Gender No. is required.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
      },
      birthday: {
        required: a.t({ en: 'Gender No. is required.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
      },
      height: {
        required: a.t({ en: 'Gender No. is required.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
      },
      weight: {
        required: a.t({ en: 'Gender No. is required.', ko: '핸드폰 번호는 필수 입력 항목입니다.' }),
      },
   
   
   
    };

    this.form.valueChanges.subscribe(res => {
      console.log('form: ', this.form.value);
      if (!this.form) {
        return;
      }
      this.validate();
    });
  }

  ngOnInit() {
  }

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

    if (this.form.invalid) {
      // Display errors and return ( don't submit )
      // Display errors on not-dirty elements also.
      this.validate(false);
      return;
    }

    console.log('onSubmit()');

 


    // this.a.wp.profile().subscribe(user => {

    //   user.display_name = this.form.value.display_name;
    //   user.user_email = this.form.value.user_email;
    //   user.gender = this.form.value.gender;
    //   user.mobile = this.form.value.mobile;
    //   console.log('user', user);
    // }, e => this.a.error(e));


  }

}
