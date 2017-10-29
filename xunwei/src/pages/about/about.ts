import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import {CookdetailPage} from "../cookdetail/cookdetail"
import {CooklistPage} from "../cooklist/cooklist";
import {CookbookService} from "../../providers/cookbook.service"
import {CooksearchPage} from "../cooksearch/cooksearch";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items:any;
  _hot=1;
  cookArray = ['jia','zhong','wai','hong'];
  cookbookModel: string = this.cookArray[0];
  constructor(
    public navCtrl: NavController,
    public modalCtrl:ModalController,
    public cookbookSer:CookbookService,
    ) {

  }
  hot(){
    this._hot=1;
  }
  new(){
    this._hot=2;
  }
  ionViewDidLoad() {
    console.log("11111111111,当页面加载时触发，仅在页面创建时，触发一次");
    this.cookbookSer.getAllCookbook().then(data => {
      this.items = data;
      // this.items = this.all_items.slice(0, 5);
      console.log("11111111111");
      console.log(this.items);
    })
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
    //进入菜谱更多页面
    toListjia(){
      let modelPage=this.modalCtrl.create(CooklistPage,{'_title':'家常菜谱'});
      modelPage.present();

    }
    toListzhong(){
      let modelPage=this.modalCtrl.create(CooklistPage,{'_title':'中华美食'});
      modelPage.present();

    }
    toListwai(){
      let modelPage=this.modalCtrl.create(CooklistPage,{'_title':'外国料理'});
      modelPage.present();

    }
    toListhong(){
      let modelPage=this.modalCtrl.create(CooklistPage,{'_title':'烘焙'});
      modelPage.present();

    }
  //去搜索页
  toSearch(){
    let modelPage=this.modalCtrl.create(CooksearchPage);
    modelPage.present();
  }
}
