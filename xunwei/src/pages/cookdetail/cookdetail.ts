import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';



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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    ) {
  }
  back() {

      this.viewCtrl.dismiss();



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookdetailPage');
  }

}
