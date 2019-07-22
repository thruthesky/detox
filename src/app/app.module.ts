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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    WordpressApiModule.forRoot({
      wordpressApiUrl: environment.wordpressApiUrl
    }),
    MobileSidemenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
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
      error: a.t({ en: 'ERROR #code', ko: '에러 #code' }),
      chooseOption: this.a.t({ en: 'Choose an Option', ko: '옵션을 선택하세요' }),
      notYourPost: this.a.t({ en: 'This is not your point.', ko: '회원님의 글이 아닙니다.' }),
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
    });
  }
}

