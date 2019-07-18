import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PopoverController } from '@ionic/angular';
import { AdminPageEditComponent } from '../admin-page-edit/admin-page-edit.component';

@Component({
  selector: 'app-admin-page-edit-button',
  templateUrl: './admin-page-edit-button.component.html',
  styleUrls: ['./admin-page-edit-button.component.scss'],
})
export class AdminPageEditButtonComponent implements OnInit {

  @Input() path: string;
  constructor(
    public a: AppService,
    private popoverController: PopoverController
  ) {
  }

  ngOnInit() { }

  onClickEdit() {
    this.a.wp.postGet(this.path).subscribe(async res => {
      console.log('post got for edit: ', res);
      // window.open(this.a.wp.adminPagePostEditUrl(res.ID), '_system');

      const pop = await this.popoverController.create({
        component: AdminPageEditComponent
      });
      pop.present();
      await pop.onWillDismiss();

    }, e => this.a.error(e));
  }
}
