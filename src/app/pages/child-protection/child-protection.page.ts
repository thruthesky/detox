import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-child-protection',
  templateUrl: './child-protection.page.html',
  styleUrls: ['./child-protection.page.scss'],
})
export class ChildProtectionPage implements OnInit {

 

  constructor(public a: AppService) { }

  ngOnInit() {
  }


}
