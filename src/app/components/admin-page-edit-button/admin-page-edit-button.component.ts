import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-admin-page-edit-button',
  templateUrl: './admin-page-edit-button.component.html',
  styleUrls: ['./admin-page-edit-button.component.scss'],
})
export class AdminPageEditButtonComponent implements OnInit {

  @Input() path: string;
  constructor(
    public a: AppService
  ) {
  }

  ngOnInit() { }

  onClickEdit() {
    this.a.wp.postGet(this.path).subscribe(res => {
      console.log('post got for edit: ', res);
      window.open(this.a.wp.adminPagePostEditUrl(res.ID), '_system');
    }, e => this.a.error(e));
  }
}
