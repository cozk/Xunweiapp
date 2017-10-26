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
  cookArray = ['jia','zhong','wai','hong'];
  cookbookModel: string = this.cookArray[0];
  isOutline: boolean = false;
  constructor(
    public navCtrl: NavController,
    public modalCtrl:ModalController,
    public cookbookSer:CookbookService,
    ) {

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
  swipeEvent(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.cookArray.indexOf(this.cookbookModel) < 2) {
        this.cookbookModel = this.cookArray[this.cookArray.indexOf(this.cookbookModel) + 1];
      }
    }
//向右滑
    if (event.direction == 4) {
      if (this.cookArray.indexOf(this.cookbookModel) > 0) {
        this.cookbookModel = this.cookArray[this.cookArray.indexOf(this.cookbookModel) - 1];
      }
    }
  }


    //点击进入详情页
    itemSelected(item) {
      console.log("菜名");
      console.log(item);
      // this.viewCtrl.dismiss();
      // this.navCtrl.push(CookdetailPage);
      // item && this.navCtrl.push(CookdetailPage,{"post_id":item.postId});

      // this.appCtrl.getRootNav().push(PostDetailPage);

      let modelPage=this.modalCtrl.create(CookdetailPage,{"_ckname": item});
      modelPage.onDidDismiss(data => {
        console.log(data);
      });

      modelPage.present();
    }
    //进入菜谱更多页面
    toList(){
      let modelPage=this.modalCtrl.create(CooklistPage);
      modelPage.present();

    }
  //去搜索页
  toSearch(){
    let modelPage=this.modalCtrl.create(CooksearchPage);
    modelPage.present();
  }
}
