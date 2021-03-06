import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController ,ModalController} from 'ionic-angular';
import {IndexService} from './../../providers/index.service';
import {CookdetailPage} from "../cookdetail/cookdetail";
/**
 * Generated class for the HomehotdishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homehotdish',
  templateUrl: 'homehotdish.html',
  providers:[IndexService]
})
export class HomehotdishPage {
  allmenus:any;
  allhotmenus:any;
  j = 4;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public is:IndexService,
    public ViewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad(){
    this.is.getAllCookbook().then(data=>{
      this.allmenus=data;
      console.log(this.allmenus);
      this.allhotmenus=this.allmenus.slice(0,4);
    });
  }

  back() {
    this.ViewCtrl.dismiss();
  }


  //点击菜谱进入详情页
  menuSelected(item) {
    let modelPage=this.modalCtrl.create(CookdetailPage,{"_ckname": item});
    modelPage.onDidDismiss(data => {
      console.log(data);
    });
    modelPage.present();
  }



  doInfinite(infiniteScroll) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let item = this.allmenus.slice(this.j, this.j+1);
        this.j = this.j + 1;
        console.log(item);
        this.allhotmenus.push(item[0]);
        if (this.allhotmenus.length == 8) {
          infiniteScroll.enable(false);
        }
        resolve();
      }, 500);
    })
  }
}
