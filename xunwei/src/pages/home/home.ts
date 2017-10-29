import { Component,ViewChild } from '@angular/core';
import { NavController,Slides ,ModalController} from 'ionic-angular';
import {IndexService} from './../../providers/index.service';
import {HottopicService} from './../../providers/hottopic.service';
import {HealthService} from './../../providers/health.service';
import {HomehealthPage} from './../homehealth/homehealth';
import {HomehotdishPage} from './../homehotdish/homehotdish';
import {HomehottopicPage} from './../homehottopic/homehottopic';
import {HealthDetailPage} from '../health-detail/health-detail';
import {TopicdetailPage} from '../topicdetail/topicdetail';
import {HomejiaPage} from '../homejia/homejia';
import {CookdetailPage} from "../cookdetail/cookdetail";
import {CooksearchPage} from "../cooksearch/cooksearch";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[IndexService,HottopicService,HealthService]

})

export class HomePage {
  @ViewChild(Slides) slides: Slides;
  imgs=['index1.jpg','index2.jpg','index3.jpg'];
  allmenus:any;
  allhotmenu:any;
  alltopic:any;
  allhottopic:any;
  allheal:any;
  allhealth:any;
  Login:boolean=false;
  constructor(
    public navCtrl: NavController,
    public is:IndexService,
    public hs:HottopicService,
    public heals:HealthService,
    public modalCtrl: ModalController,
    private storage:Storage
  ) {

  }
  tomenu(){
    let modalPage = this.modalCtrl.create(HomehotdishPage)
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();
  }

  toadd(){
    this.navCtrl.push(HomejiaPage);
  }

  totopic(){
    let modalPage = this.modalCtrl.create(HomehottopicPage)
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();
  }

  tohealth(){
    let modalPage = this.modalCtrl.create(HomehealthPage)
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();
  }


  ionViewDidLoad(){
    this.storage.get('isLogin').then((val) => {
      if(val)
        this.Login=true;
    });


    this.is.getAllCookbook().then(data=>{
      this.allmenus=data;
      this.allhotmenu=this.allmenus.slice(0,4);
    });

    this.hs.getAllHottopic().then(data=>{
      this.alltopic=data;
      this.allhottopic=this.alltopic.slice(0,3);
    });

    this.heals.getAllHealth().then(data=>{
      this.allheal=data;
      this.allhealth=this.allheal.slice(0,3);
    });


  }
  slideChanged(){
    this.slides.startAutoplay();
  }

  //去搜索页
  toSearch(){
    let modelPage=this.modalCtrl.create(CooksearchPage);
    modelPage.present();
  }

  itemSelected(item) {
    let modalPage = this.modalCtrl.create(HealthDetailPage, {"health_title": item.healthtitle})
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();
  }

  topicSelected(item) {
    let modalPage = this.modalCtrl.create(TopicdetailPage, {"topic_title": item.title})
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();
  }

  //点击菜谱进入详情页
  menuSelected(item) {
    let modelPage=this.modalCtrl.create(CookdetailPage,{"_ckname": item});
    modelPage.onDidDismiss(data => {
      console.log(data);
    });
    modelPage.present();
  }

}
