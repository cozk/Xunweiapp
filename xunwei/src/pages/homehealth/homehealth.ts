import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,ViewController} from 'ionic-angular';
import {HealthService} from './../../providers/health.service';
import {HealthDetailPage} from '../health-detail/health-detail';
/**
 * Generated class for the HomehealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homehealth',
  templateUrl: 'homehealth.html',
  providers:[HealthService]
})
export class HomehealthPage {
  allheal:any;
  items: any;
  j = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public heals:HealthService,
    public  modalCtrl: ModalController,
    public ViewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    this.heals.getAllHealth().then(data=>{
      this.allheal=data;
      this.items = this.allheal.slice(0, 5);
    });
  }

  doInfinite(infiniteScroll) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.j = this.j + 5;
        let item = this.allheal.slice(this.j, this.j + 5);
        console.log(item);
        this.items.push(item[0], item[1], item[2], item[3], item[4]);
        if (this.items.length == 40) {
          infiniteScroll.enable(false);
        }
        resolve();
      }, 500);
    })
  }

  itemSelected(item) {
    let modalPage = this.modalCtrl.create(HealthDetailPage, {"health_title": item.healthtitle})
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();

  }

  back() {
    this.ViewCtrl.dismiss();
  }

}
