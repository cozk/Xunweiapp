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
  list01=[
    {'list01':'家常菜','val':'01'},
    {'list01':'私家菜','val':'02'},
    {'list01':'凉菜','val':'03'},
    {'list01':'海鲜','val':'04'},
  ];
  list02=[
    {'list02':'川菜','val':'01'},
    {'list02':'湘菜','val':'02'},
    {'list02':'粤菜','val':'03'},
    {'list02':'东北菜','val':'04'},
    {'list02':'鲁菜','val':'05'},
    {'list02':'浙菜','val':'06'},
    {'list02':'苏菜','val':'07'},
  ];
  list03=[
    {'list03':'韩国料理','val':'01'},
    {'list03':'日本料理','val':'02'},
    {'list03':'法国菜','val':'03'},
    {'list03':'意大利菜','val':'04'},
    {'list03':'西餐面点','val':'06'},
  ];
  list04=[
    {'list04':'蛋糕面包','val':'01'},
    {'list04':'饼干配方','val':'02'},
    {'list04':'甜品点心','val':'03'},
  ];
  cooklistModel: string='01' ;
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
