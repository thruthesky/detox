import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ModalController } from '@ionic/angular';
// import { AdminPageEditComponent } from '../admin-page-edit/admin-page-edit.component';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { IonPostEditComponent } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.component';

@Component({
  selector: 'app-admin-page-edit-button',
  templateUrl: './admin-page-edit-button.component.html',
  styleUrls: ['./admin-page-edit-button.component.scss'],
})
export class AdminPageEditButtonComponent implements OnInit {

  @Output() edited = new EventEmitter<Post>();
  @Input() guid: string;
  constructor(
    public a: AppService,
    private modalController: ModalController
  ) {
  }

  ngOnInit() { }

  async onClickEdit() {
    const pop = await this.modalController.create({
      component: IonPostEditComponent,
      componentProps: {
        guid: this.guid,
        header: {
          color: 'primary',
          title: this.a.t({ en: 'Page content edit', ko: '페이지 글 수정' })
        }
      }
    });
    pop.present();
    const res = await pop.onWillDismiss();
    if (res && res.data) {
      this.edited.emit(res.data);
    }
  }
}

