import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {SeachlistPage} from "../seachlist/seachlist"
/**
 * Generated class for the CooksearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooksearch',
  templateUrl: 'cooksearch.html',
})
export class CooksearchPage {
  hotSearch=[
    {'hs':'家常菜'},
    {'hs':'苏菜'},
    {'hs':'甜品点心'},
    {'hs':'鱼'},
    {'hs':'牛肉'},
    {'hs':'鸡'},
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public modalCtrl:ModalController,


  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CooksearchPage');
  }
  //返回
  back() {
    this.viewCtrl.dismiss();
    // this.navCtrl.push(TabsPage);
  }
  toSearchList(text){
    let modelPage=this.modalCtrl.create(SeachlistPage,{"_sText": text});
    modelPage.onDidDismiss(data => {
      console.log(data);
    });

    modelPage.present();
  }

}
