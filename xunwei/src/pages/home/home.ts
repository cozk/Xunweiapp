import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import {IndexService} from './../../providers/index.service';
import {HottopicService} from './../../providers/hottopic.service';
import {HealthService} from './../../providers/health.service';
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
  constructor(
    public navCtrl: NavController,
    public is:IndexService,
    public hs:HottopicService,
    public heals:HealthService
  ) {

  }
  ionViewDidLoad(){
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

}
