import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CookbookService} from "../../providers/cookbook.service"




/**
 * Generated class for the CookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookdetail',
  templateUrl: 'cookdetail.html',


})
export class CookdetailPage {
  cookDetail:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public cookbookSer:CookbookService,
  ) {
  }
  back() {

      this.viewCtrl.dismiss();
    // this.navCtrl.push(TabsPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookdetailPage');
    let title=this.navParams.get('_ckname');
    this.cookbookSer.getDetailCookbook(title).then(cookDetail=>{
      this.cookDetail=cookDetail;
      console.log(cookDetail);
    })
  }

}
