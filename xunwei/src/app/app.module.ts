import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MePage } from '../pages/me/me';
import { SettingPage } from '../pages/setting/setting';
import { GuanzhuPage } from '../pages/guanzhu/guanzhu';
import { FensiPage } from '../pages/fensi/fensi';
import { EditPage } from '../pages/edit/edit';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import {HealthDetailPage} from '../pages/health-detail/health-detail'

//服务
import {HttpClientModule} from "@angular/common/http"
import{HealthService} from '../providers/health.service'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    SettingPage,
    GuanzhuPage,
    FensiPage,
    EditPage,
    MePage,
    HealthDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    SettingPage,
    GuanzhuPage,
    FensiPage,
    EditPage,
    HealthDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HealthService
  ]
})
export class AppModule {}
