import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {CooksearchPage} from "../cooksearch/cooksearch";
import {CookbookService} from "../../providers/cookbook.service";
import {CookdetailPage} from "../cookdetail/cookdetail";
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
  _title:string;
  _list:string;
  _result:any;
  _text:string;
  Showjia:boolean=false;
  Showzhong:boolean=false;
  Showwai:boolean=false;
  Showhong:boolean=false;
  list01=[
    {'list01':'家常菜'},
    {'list01':'私家菜'},
    {'list01':'凉菜'},
    {'list01':'海鲜'},
  ];
  list02=[
    {'list02':'川菜'},
    {'list02':'湘菜'},
    {'list02':'粤菜'},
    {'list02':'东北菜'},
    {'list02':'鲁菜'},
    {'list02':'浙菜'},
    {'list02':'苏菜'},
  ];
  list03=[
    {'list03':'韩国料理'},
    {'list03':'日本料理'},
    {'list03':'法国菜'},
    {'list03':'意大利菜'},
    {'list03':'西餐面点'},
  ];
  list04=[
    {'list04':'蛋糕面包'},
    {'list04':'饼干配方'},
    {'list04':'甜品点心'},
  ];
  cooklistModel: string='01' ;
  constructor(
    public navCtrl: NavController,
    public viewCtrl:ViewController,
    public navParams: NavParams,
    private cs: CookbookService,
    public modalCtrl:ModalController,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CooklistPage');
    this. _title=this.navParams.get('_title');
    console.log(this._title);
    this.cs.getAllCookbook().then(data => {
      this._result = data;
    });
    if(this._title=='家常菜谱'){
      this.Showjia=true;
    }
    else if(this._title=='中华美食'){
      this.Showzhong=true;
    }
    else if(this._title=='外国料理'){
      this.Showwai=true;
    }
    else if(this._title=='烘焙'){
      this.Showhong=true;
    }
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
  groupBy(a){
    console.log(a);
    this._text=a;
    console.log(this._text);

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
