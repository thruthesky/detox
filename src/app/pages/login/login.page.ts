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

  constructor(
    public a: AppService,
    public fb: FormBuilder,
    ) {


      this.form = fb.group({
        user_email: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
        user_pass: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      });

   }

  ngOnInit() {
  }



  onSubmit() {
    
  }

}
