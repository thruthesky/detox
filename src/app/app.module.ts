import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WordpressApiModule } from 'modules/wordpress-api/services/wordpress-api.module';
import { MobileSidemenuModule } from './components/header/mobile-sidemenu/mobile-sidemenu.module';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { Camera } from '@ionic-native/camera/ngx';
import { WordpressApiService } from 'modules/wordpress-api/services/wordpress-api.service';
import { AppService } from './services/app.service';
import { DesktopHomeFooterModule } from './components/desktop-home-footer/desktop-home-footer.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { FirebaseService } from './services/firebase.service';
import { IonServiceModule } from 'modules/wordpress-api/components/shared/ion-service/ion-service.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    WordpressApiModule.forRoot({
      wordpressApiUrl: environment.wordpressApiUrl,
      anonymousPhotoUrl: '/assets/img/anonymous.jpg',
      urlToSendPushNotification: 'push-notifications-to-all-users',
    }),
    IonServiceModule,
    MobileSidemenuModule,
    DesktopHomeFooterModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCcUlrZllRxUnlILzE8xWXqImV-iWclE_8',
      authDomain: 'detox-withcenter.firebaseapp.com',
      databaseURL: 'https://detox-withcenter.firebaseio.com',
      projectId: 'detox-withcenter',
      storageBucket: '',
      messagingSenderId: '206606581195',
      appId: '1:206606581195:web:2f2d95bf05330162'
    }),
    AngularFireMessagingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FirebaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private wp: WordpressApiService,
    private a: AppService
  ) {
    wp.addText({
      ok: a.t({ en: 'OK', ko: '확인' }),
      yes: a.t({ en: 'Yes', ko: '예' }),
      no: a.t({ en: 'No', ko: '아니오' }),
      error: a.t({ en: 'ERROR #code', ko: '에러 #code' }),
      chooseOption: this.a.t({ en: 'Choose an Option', ko: '옵션을 선택하세요' }),
      confirmDelete: this.a.t({ en: 'Do you want to delete?', ko: '정말로 삭제를 하시겠습니까?'}),
      notYourPost: this.a.t({ en: 'This is not your post.', ko: '회원님의 글이 아닙니다.' }),
      notYourComment: this.a.t({ en: 'This is not your comment.', ko: '회원님이 작성한 코멘트가 아닙니다.' }),
      title: a.t({ en: 'Title', ko: '제목' }),
      content: a.t({ en: 'Content', ko: '내용' }),
      inputTitle: a.t({ en: 'Please input title', ko: '제목을 입력하세요.' }),
      inputContent: a.t({ en: 'Please input content', ko: '내용을 입력하세요.' }),
      fileUpload: a.t({ en: 'Upload Image', ko: '사진 업로드' }),
      submitPost: a.t({ en: 'Create Post', ko: '글 등록' }),
      titleCreatePost: a.t({ en: 'Writing new post on #name forum', ko: '#name 게시판에 글쓰기' }),
      discussion: a.t({ en: 'Discussion', ko: '자유토론' }),
      postNotFoundToUpdateOnPostList: a.t({ en: 'Cannot find the post to update on the post list.', ko: '게시글 목록에서 업데이트 할 글을 찾을 수가 없습니다.' }),
      postNotFoundToDeleteOnPostList: a.t({ en: 'Cannot find the post to delete on the post list.', ko: '게시글 목록에서 삭제 할 글을 찾을 수가 없습니다.' }),
      noMorePosts: a.t({ en: 'There is no more post avaiable.', ko: '더 이상 글이 존재하지 않습니다.' }),
    });
  
  }
}

