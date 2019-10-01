import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-password-find',
  templateUrl: './password-find.page.html',
  styleUrls: ['./password-find.page.scss'],
})
export class PasswordFindPage implements OnInit {

  email = '';
  title: string;
  constructor(public a: AppService) {
    this.title = a.t({ en: 'Password Find', ko: '비밀번호 찾기' });
   }

  ngOnInit() {
  }

  onSubmit() {


    this.a.wp.resetPassword({ email: this.email }).subscribe(res => {
      // console.log('password reset: ', res);

      this.a.wp.sendEmail({
        email: this.email,
        title: `7Detox - Your password has been changed.`,
        body: `Your new password in 7Detox is ${res.new_password}`,
      }).subscribe(re => {
        // console.log('email sent!', re);
      }, e => this.a.error(e));
    }, e => this.a.error(e));

  }

}
