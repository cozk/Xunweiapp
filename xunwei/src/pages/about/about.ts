import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import {CookdetailPage} from "../cookdetail/cookdetail"
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  cookArray = ['jia','zhong','wai','hong'];
  cookbookModel: string = this.cookArray[0];
  constructor(
    public navCtrl: NavController,
    public modalCtrl:ModalController,
    ) {

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
    itemSelected() {
      // this.viewCtrl.dismiss();
      // this.navCtrl.push(CookdetailPage);
      // item && this.navCtrl.push(CookdetailPage,{"post_id":item.postId});

      // this.appCtrl.getRootNav().push(PostDetailPage);

      let modelPage=this.modalCtrl.create(CookdetailPage);
      // modelPage.onDidDismiss(data => {
      //   console.log(data);
      // });

      modelPage.present();
    }
}
