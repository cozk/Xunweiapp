import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage:Storage,
  ) {
  }

  ionViewDidLoad() {

  }
  toback() {
    this.storage.ready().then(() => {
      this.storage.set('_page', 3);
    })
    // console.log(this.storage.get('_page'));
    this.viewCtrl.dismiss();
    this.navCtrl.push(TabsPage);

  }
}
