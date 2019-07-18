import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
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
    private popoverController: PopoverController,
    public a: AppService
  ) { }

  ngOnInit() {}


  open(url: string) {

    if(this.a.isDesktop) {
      this.popoverController.dismiss(); 
      console.log('popclose');
    } else {
      this.menu.close();
      console.log('menuclose');
    }

   
    
    if(url){
      this.router.navigateByUrl(url);
    }
  }

  onClickLogout() {
    
    if(this.a.isDesktop) {
      this.popoverController.dismiss(); 
    } else {
      this.menu.close();
    }

    this.a.logout();
    this.a.open('/login');
  }


  


}

