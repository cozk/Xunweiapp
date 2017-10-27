import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {HealthService} from '../../providers/health.service';
import {HealthPage} from '../health/health';
import {HealthDetailPage} from '../health-detail/health-detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: any;
  all_items: any;
  healthcommon: any;
  healthtaboo: any;
  healthsafety: any;
  healthstory: any;
  healthtea: any;
  i = 7;
  j = 0;

  constructor(public navCtrl: NavController,
              public  healthSer: HealthService,
              public  modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log("11111111111,当页面加载时触发，仅在页面创建时，触发一次");
    console.log(this.navCtrl.length());
    this.healthSer.getAllHealth().then(data => {
      this.all_items = data;
      this.healthcommon = this.all_items.slice(0, 3);
      this.healthtaboo = this.all_items.slice(8, 11);
      this.healthsafety = this.all_items.slice(16, 19);
      this.healthstory = this.all_items.slice(24, 27);
      this.healthtea = this.all_items.slice(32, 35);
      // console.log("11111111111");
      // console.log(this.items);
    })
  }

  moreHealthcommon() {
    this.navCtrl.push(HealthPage, {more: '帮助你了解更多的饮食小常识', pipe: 'healthCommon'});
  }

  moreHealthboo() {
    this.navCtrl.push(HealthPage, {more: '生活中需要知道的那些饮食间的禁忌', pipe: 'healthTaboo'});
  }

  moreHealthsafety() {
    this.navCtrl.push(HealthPage, {more: '警惕生活中那些不容忽视的食品安全问题', pipe: 'healthSafety'});

  }

  moreHealthstory() {
    this.navCtrl.push(HealthPage, {more: '了解那些美食的历史典故', pipe: 'healthStory'});
  }

  moreHealthtea() {
    this.navCtrl.push(HealthPage, {more: '茶说：我就是一杯水，你看到的是你的想象', pipe: 'healthTea'});
  }

  itemSelected(item) {
    // item && console.log(item.postId);
    // item && this.navCtrl.push(PostDetailPage,{"post_id":item.postId});
    let modalPage = this.modalCtrl.create(HealthDetailPage, {"health_title": item.healthtitle})
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();
  }

}
