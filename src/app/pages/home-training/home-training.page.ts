import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { HomeTrainingMenuListComponent } from 'src/app/components/home-training-menu-list/home-training-menu-list.component';
import { HomeTrainingMenuItemComponent } from 'src/app/components/home-training-menu-item/home-training-menu-item.component';
import { IonContent } from '@ionic/angular';
import { JoinMenuComponent } from 'src/app/components/join-menu/join-menu.component';
// import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home-training',
  templateUrl: './home-training.page.html',
  styleUrls: ['./home-training.page.scss'],
})
export class HomeTrainingPage implements OnInit {

  @ViewChild('list', { static: false }) list: HomeTrainingMenuListComponent;
  @ViewChild('item', { static: false }) item: HomeTrainingMenuItemComponent;


  @ViewChild(IonContent, { static: true }) content: IonContent;


  show: 'item' | 'list' = 'list';

  constructor(
    public a: AppService,
    // activatedRoute: ActivatedRoute
  ) {
    // activatedRoute.paramMap.subscribe(parmas => {
    //   // console.log('route change: ');
    // });
  }

  ngOnInit() {
  }

  showList() {
    this.show = 'list';
  }
  showItem() {
    this.show = 'item';
  }

  onSelected(ID: string) {
    // console.log('item: ', this.item);
    this.showItem();
    // history.pushState({}, 'item title', `/home-training/item/${ID}`);
    this.item.onLoad(ID);
    this.scrollToTop();
  }

  onChangeTab(name: string) {
    // console.log('list', this.list);
    this.showList();
    this.list.loadItems(name);
    this.scrollToTop();
  }

  scrollToTop() {
    this.content.scrollToTop(100);
  }
}


