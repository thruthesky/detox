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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    WordpressApiModule.forRoot({
      wordpressApiUrl: environment.apiUrl
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
  constructor() {
  }
}

