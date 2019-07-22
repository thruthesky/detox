import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { IonPostListComponent } from 'modules/wordpress-api/components/forum/ion-post-list/ion-post-list.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})
export class PostListPage implements OnInit {

  @ViewChild(IonPostListComponent) postList: IonPostListComponent;
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
    console.log('ngOnInit::');
  }

  onIonChangeForum(event: any) {
    console.log('event value:', event.value);

    this.postList.slug = event.value;
    this.postList.ngOnInit();
  }
}
