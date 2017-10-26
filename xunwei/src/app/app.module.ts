import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomehotdishPage } from '../pages/homehotdish/homehotdish';
import { HomehottopicPage } from '../pages/homehottopic/homehottopic';
import { HomehealthPage } from '../pages/homehealth/homehealth';
import { HomejiaPage } from '../pages/homejia/homejia';
import { HomePage } from '../pages/home/home';
import { TopicdetailPage} from'./../pages/topicdetail/topicdetail'
import { TabsPage } from '../pages/tabs/tabs';
import { MePage } from '../pages/me/me';
import { SettingPage } from '../pages/setting/setting';
import { GuanzhuPage } from '../pages/guanzhu/guanzhu';
import { FensiPage } from '../pages/fensi/fensi';
import { EditPage } from '../pages/edit/edit';
import { UpPage } from '../pages/up/up';
import { LoginPage }from '../pages/login/login'
import { RegisterPage }from '../pages/register/register'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import {HealthDetailPage} from '../pages/health-detail/health-detail'
import {CookdetailPage} from '../pages/cookdetail/cookdetail'//菜谱详情页
import {CooklistPage} from "../pages/cooklist/cooklist"//菜谱列表
import {CooksearchPage} from "../pages/cooksearch/cooksearch"//菜谱搜索
import {SeachlistPage} from "../pages/seachlist/seachlist"//搜索结果
//服务
import {HttpClientModule} from "@angular/common/http"
import{HealthService} from '../providers/health.service'
import {CookbookService} from "../providers/cookbook.service"
import{ UsersService } from '../providers/users.service'
import{ PersonalService } from '../providers/personal.service'

//管道
import{IndexhotmenuPipe} from'./../pipes/indexhotmenu.pipe'
import{JiequPipe} from'./../pipes/jiequ.pipe'
import{HuatijiequPipe} from'./../pipes/huatijiequ.pipe'

import {JiachangPipe} from "../pipes/jiachang.pipe"
import {ZhonghuaPipe} from "../pipes/zhonghua.pipe"
import {WaiguoPipe} from "../pipes/waiguo.pipe"
import {HongpeiPipe} from "../pipes/hongpei.pipe"
import {SearchCooksPipe} from "../pipes/search-cooks.pipe"
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
    UpPage,
    HealthDetailPage,
    LoginPage,
    RegisterPage,
    HealthDetailPage,
    IndexhotmenuPipe,
    JiequPipe,
    HuatijiequPipe,
    JiachangPipe,//家常
    ZhonghuaPipe,//中华
    WaiguoPipe,//外国
    HongpeiPipe,//烘焙
    SearchCooksPipe,//搜索
    CooklistPage,
    CooksearchPage,
    HomehotdishPage,
    HomehottopicPage,
    HomehealthPage,
    TopicdetailPage,
    HomejiaPage,
    SeachlistPage,
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
    CookdetailPage,
    SettingPage,
    GuanzhuPage,
    FensiPage,
    EditPage,
    UpPage,
    HealthDetailPage,
    LoginPage,
    RegisterPage,
    HealthDetailPage,
    CooklistPage,
    CooksearchPage,
    HomehotdishPage,
    HomehottopicPage,
    HomehealthPage,
    TopicdetailPage,
    HomejiaPage,
    SeachlistPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HealthService,
    CookbookService,
    HealthService,
    UsersService,
    PersonalService
  ]
})
export class AppModule {}
