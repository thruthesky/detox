import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-sidemenu',
  templateUrl: './mobile-sidemenu.component.html',
  styleUrls: ['./mobile-sidemenu.component.scss'],
})
export class MobileSidemenuComponent implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController,
    public a: AppService
  ) { }

  ngOnInit() {}


  open(url: string) {
    this.menu.close();
    this.router.navigateByUrl(url);
  }

}

