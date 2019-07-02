import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-mobile-sidemenu',
  templateUrl: './mobile-sidemenu.component.html',
  styleUrls: ['./mobile-sidemenu.component.scss'],
})
export class MobileSidemenuComponent implements OnInit {

  constructor(
    private menu: MenuController,
    public a: AppService
  ) { }

  ngOnInit() {}


  sideMenuCLose() {
    this.menu.close();
  }

}

