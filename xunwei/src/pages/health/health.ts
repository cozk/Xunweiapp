import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
import {HealthService} from '../../providers/health.service';
import {HealthDetailPage} from '../health-detail/health-detail';

/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {
  more: any;
  pipe: any;
  items: any;
  all_items: any;
  j = 3;
  k = 11;
  l = 19;
  m = 27;
  n = 35;
  showHealthCommon: boolean = false;
  showHealthTaboo: boolean = false;
  showHealthSafety: boolean = false;
  showHealthStory: boolean = false;
  showHealthTea: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public  healthSer: HealthService,
              public  modalCtrl: ModalController,
              public ViewCtrl: ViewController,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
    console.log(this.navCtrl.length());

    this.more = this.navParams.get('more')
    this.pipe = this.navParams.get('pipe')
    console.log(this.more);
    if (this.pipe == 'healthCommon') {
      this.healthSer.getAllHealth().then(data => {
        this.all_items = data;
        this.items = this.all_items.slice(0, 4);
        console.log("11111111111");
        console.log(this.items);
      })
      this.showHealthCommon = true;
    }
    else if (this.pipe == 'healthTaboo') {
      this.healthSer.getAllHealth().then(data => {
        this.all_items = data;
        this.items = this.all_items.slice(8, 12);
        console.log("11111111111");
        console.log(this.items);
      })
      this.showHealthTaboo = true;
    } else if (this.pipe == 'healthSafety') {
      this.healthSer.getAllHealth().then(data => {
        this.all_items = data;
        this.items = this.all_items.slice(16, 20);
        console.log("11111111111");
        console.log(this.items);
      })
      this.showHealthSafety = true;
    } else if (this.pipe == 'healthStory') {
      this.healthSer.getAllHealth().then(data => {
        this.all_items = data;
        this.items = this.all_items.slice(24, 28);
        console.log("11111111111");
        console.log(this.items);
      })
      this.showHealthStory = true;
    } else if (this.pipe == 'healthTea') {
      this.healthSer.getAllHealth().then(data => {
        this.all_items = data;
        this.items = this.all_items.slice(32, 36);
        console.log("11111111111");
        console.log(this.items);
      })
      this.showHealthTea = true;
    }
  }

  doInfinite(infiniteScroll) {
    return new Promise((resolve) => {
      if (this.pipe == 'healthCommon') {
        setTimeout(() => {
          this.j = this.j + 1;
          let item = this.all_items.slice(this.j, this.j + 1);
          this.items.push(item[0]);
          console.log("22222222222");
          console.log(this.items);
          console.log(this.items.length);
          if (this.items.length == 8) {
            infiniteScroll.enable(false);
          }
          resolve();
        }, 500);
      }
      else if (this.pipe == 'healthTaboo') {
        setTimeout(() => {
          this.k = this.k + 1;
          let item = this.all_items.slice(this.k, this.k + 1);
          this.items.push(item[0]);
          console.log("22222222222");
          console.log(this.items);
          console.log(this.items.length);

          if (this.items.length == 8) {
            infiniteScroll.enable(false);
          }
          resolve();
        }, 500);
      }
      else if (this.pipe == 'healthSafety') {
        setTimeout(() => {
          this.l = this.l + 1;
          let item = this.all_items.slice(this.l, this.l + 1);
          this.items.push(item[0]);
          console.log("22222222222");
          console.log(this.items);
          console.log(this.items.length);

          if (this.items.length == 8) {
            infiniteScroll.enable(false);
          }
          resolve();
        }, 500);
      }
      else if (this.pipe == 'healthStory') {
        setTimeout(() => {
          this.m = this.m + 1;
          let item = this.all_items.slice(this.m, this.m + 1);
          this.items.push(item[0]);
          console.log("22222222222");
          console.log(this.items);
          console.log(this.items.length);

          if (this.items.length == 8) {
            infiniteScroll.enable(false);
          }
          resolve();
        }, 500);
      }
      else if (this.pipe == 'healthTea') {
        setTimeout(() => {
          this.n = this.n + 1;
          let item = this.all_items.slice(this.n, this.n + 1);
          this.items.push(item[0]);
          console.log("22222222222");
          console.log(this.items);
          console.log(this.items.length);

          if (this.items.length == 8) {
            infiniteScroll.enable(false);
          }
          resolve();
        }, 500);
      }

    })
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
  back() {
    this.navCtrl.pop();
  }
  ionViewDidEnter() {
    //  this.more=this.navParams.get('more')
    // console.log(this.more);
  }
}
