import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WordpressApiModule } from 'modules/wordpress-api/wordpress-api.module';
import { WordpressApiService } from 'modules/wordpress-api/wordpress-api';
import { MobileSidemenuModule } from './components/header/mobile-sidemenu/mobile-sidemenu.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    WordpressApiModule,
    MobileSidemenuModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( wp: WordpressApiService ) {
    wp.apiUrl = environment.apiUrl;
    console.log('wp:', wp);
  }
}

