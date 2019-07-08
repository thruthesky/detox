import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public a: AppService
  ) {
    a.wp.profile().subscribe(user => {
      console.log('user', user);
    }, e => a.error(e));
  }

  ngOnInit() {
  }

}
