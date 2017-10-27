import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {CooksearchPage} from "../cooksearch/cooksearch";
// import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the CooklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooklist',
  templateUrl: 'cooklist.html',
})
export class CooklistPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl:ViewController,
    public navParams: NavParams,
    public modalCtrl:ModalController,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CooklistPage');
  }
  back() {
    this.viewCtrl.dismiss();
    // this.navCtrl.push(TabsPage);
  }
  //去搜索页
  toSearch(){
    let modelPage=this.modalCtrl.create(CooksearchPage);
    modelPage.present();
  }
}
