import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ModalController } from '@ionic/angular';
import { AdminPageEditComponent } from '../admin-page-edit/admin-page-edit.component';

@Component({
  selector: 'app-admin-page-edit-button',
  templateUrl: './admin-page-edit-button.component.html',
  styleUrls: ['./admin-page-edit-button.component.scss'],
})
export class AdminPageEditButtonComponent implements OnInit {

  @Input() guid: string;
  constructor(
    public a: AppService,
    private modalController: ModalController
  ) {
  }

  ngOnInit() { }

  async onClickEdit() {
    const res = await this.a.wp.postGet({ guid: this.guid }).toPromise().catch(e => e);
    console.log('post got for edit: ', res);

    const data: any = {};
    if (res.ID !== void 0) {
      data.ID = res.ID;
    } else {
      data.guid = this.guid;
    }

    const pop = await this.modalController.create({
      component: AdminPageEditComponent,
      componentProps: data
    });
    pop.present();
    await pop.onWillDismiss();

  }
}

