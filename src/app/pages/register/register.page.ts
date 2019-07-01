import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { User } from 'modules/wordpress-api/wordpress-api.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  user: User = {} as User;
  constructor(
    public a: AppService
  ) {



    // a.wp.version().subscribe(v => console.log('v: ', v));

    a.wp.register({
      user_login: 'user_abc2',
      user_pass: '12345a2',
      user_email: '2abc@def.com'
    }).subscribe(res => {
      console.log('register', res);
    });
  }




  ngOnInit() {
  }

}




