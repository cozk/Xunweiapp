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
import {CookdetailPage} from '../pages/cookdetail/cookdetail'//菜谱详情页
import {CooklistPage} from "../pages/cooklist/cooklist"//菜谱列表
import {CooksearchPage} from "../pages/cooksearch/cooksearch"//菜谱搜索
//服务
import {HttpClientModule} from "@angular/common/http"
import{HealthService} from '../providers/health.service'
import {CookbookService} from "../providers/cookbook.service"
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    CookdetailPage,
    SettingPage,
    GuanzhuPage,
    FensiPage,
    EditPage,
    HealthDetailPage,
    CooklistPage,
    CooksearchPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    CookdetailPage,
    SettingPage,
    GuanzhuPage,
    FensiPage,
    EditPage,
    HealthDetailPage,
    CooklistPage,
    CooksearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HealthService,
    CookbookService,
  ]
})
export class AppModule {}
