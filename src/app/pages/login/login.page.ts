import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  form: FormGroup;
  submitted = false;

  constructor(
    public a: AppService,
    public fb: FormBuilder,
  ) {


    this.form = fb.group({
      user_email: ['', [Validators.required, Validators.email]],
      user_pass: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(64)]],
    });

  }

  ngOnInit() {

    // this.onSubmit();
  }



  onSubmit() {
    console.log('onSubmit(): ');
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.a.wp.login({
      user_email: this.form.get('user_email').value,
      user_pass: this.form.get('user_pass').value
    }).subscribe(user => {
      // console.log('user login success', user);
      this.a.openHome();
    }, e => this.a.error(e));
  }

  errors(formName: string): any {
    return this.form.get(formName).errors;
  }

}
