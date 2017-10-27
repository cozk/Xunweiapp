import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FensiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fensi',
  templateUrl: 'fensi.html',
})
export class FensiPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private storage:Storage,
  ) {
  }

  ionViewDidLoad() {

  }

  toback() {
    this.viewCtrl.dismiss();
  }
}
