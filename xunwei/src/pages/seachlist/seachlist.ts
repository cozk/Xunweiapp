import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {CookbookService} from "../../providers/cookbook.service"
import {CookdetailPage} from "../cookdetail/cookdetail";
/**
 * Generated class for the SeachlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seachlist',
  templateUrl: 'seachlist.html',
})
export class SeachlistPage {
  _text:string;
  _result:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cs: CookbookService,
    public viewCtrl:ViewController,
    public modalCtrl:ModalController,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeachlistPage');
    this. _text=this.navParams.get('_sText');

    this.cs.getAllCookbook().then(data => {
      this._result = data;
      // this.items = this.all_items.slice(0, 5);
      console.log("搜索结果");
      console.log(this._result);
    })
  }
  back() {
    this.viewCtrl.dismiss();
    // this.navCtrl.push(TabsPage);
  }
  //点击进入详情页
  itemSelected(item) {
    console.log("菜名");
    console.log(item);
    let modelPage=this.modalCtrl.create(CookdetailPage,{"_ckname": item});
    modelPage.onDidDismiss(data => {
      console.log(data);
    });

    modelPage.present();
  }

}
