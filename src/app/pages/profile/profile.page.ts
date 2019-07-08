import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegisterOptions } from 'modules/wordpress-api/wordpress-api.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  form: FormGroup;

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

    }, e => a.error(e));







    /**
     * @note
     */
    this.form = fb.group({
      display_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      mobile: ['', Validators.required],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]]
    });

  }

  ngOnInit() {
  }


  onSubmit() {
    console.log('onSubmit()');

    this.a.wp.profile().subscribe(user => {

      user.display_name = this.form.value.display_name;
      user.user_email = this.form.value.user_email;
      user.gender = this.form.value.gender;
      user.mobile = this.form.value.mobile;
      console.log('user', user);
    }, e => this.a.error(e));


  }



}
