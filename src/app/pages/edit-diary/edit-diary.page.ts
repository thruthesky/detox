import { Component, OnInit, ViewChild  } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Post } from 'modules/wordpress-api/services/wordpress-api.interface';
import { IonPostEditComponent } from 'modules/wordpress-api/components/forum/ion-post-edit/ion-post-edit.component';

@Component({
  selector: 'app-edit-diary',
  templateUrl: './edit-diary.page.html',
  styleUrls: ['./edit-diary.page.scss'],
})
export class EditDiaryPage implements OnInit {

  @ViewChild(IonPostEditComponent, {static: true }) edit: IonPostEditComponent;
  constructor(
    public a: AppService
  ) {
    window['comp'] = this;
  }

  ngOnInit() {
  }


  get layout(): string {
    if (this.a.diaryPostToView) {
      return 'diary-view';
    }
    return 'diary';
  }

  get post(): Post {

    if (this.a.diaryPostToView) {
      return this.a.diaryPostToView;
    } else {
      return this.a.diaryPostToEdit;
    }
  }

  onEdited() {
    this.a.open('/join/detoxification-diary');
  }
  onEdit(post: Post) {
    this.edit.layout = 'diary';
    this.a.diaryPostToEdit = post;
    this.a.diaryPostToView = null;
    this.edit.post = post;
    this.edit.ngOnInit();
    // this.a.open('/edit-diary');
    // this.edit.post = post;
    // this.edit.ngOnInit();
    // this.a.diaryPostToEdit = post;
    // console.log('edit: ', post);
  }
  onGoBack() {
    this.a.open('/join/detoxification-diary');
  }
}

