import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { IonPostListComponent } from 'modules/wordpress-api/components/forum/ion-post-list/ion-post-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})
export class PostListPage implements OnInit {


  @ViewChild(IonPostListComponent, { static: true }) postList: IonPostListComponent;

  slug: string;
  keyword: string;
  constructor(
    public a: AppService,
    activiatedRoute: ActivatedRoute
  ) {
    activiatedRoute.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.keyword = params.get('keyword');
      console.log('slug: ', this.slug);
      console.log('keyword: ', this.keyword);
    });
  }

  ngOnInit() {
    // console.log('ngOnInit::');
  }

  onIonChangeForum(event: any) {
    if (this.slug) {
      return;
    }
    // console.log('event value:', event.value);
    this.postList.slug = event.value;
    this.postList.ngOnInit();
  }


}
