import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Post } from 'modules/wordpress-api/wordpress-api.interface';
import { AppService } from 'src/app/services/app.service';
import { AdminPageEditButtonComponent } from '../admin-page-edit-button/admin-page-edit-button.component';

@Component({
  selector: 'app-page-post-content',
  templateUrl: './page-post-content.component.html',
  styleUrls: ['./page-post-content.component.scss'],
})
export class PagePostContentComponent implements OnInit {

  @ViewChild(AdminPageEditButtonComponent) editButton: AdminPageEditButtonComponent;
  @Input() post: Post;
  @Input() guid: string;
  @Output() edited = new EventEmitter<Post>();
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
    // if (this.guid === 'about-page-top-left') {
    //   setTimeout(() => this.editButton.onClickEdit(), 200);
    // }
  }

}
