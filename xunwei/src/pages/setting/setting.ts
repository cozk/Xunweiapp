import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';

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
    this.viewCtrl.dismiss();
  }

  // exit(){
  //   this.storage.ready().then(()=>{
  //     this.storage.remove('isLogin');
  //   });
  //   this.viewCtrl.dismiss();
  //   this.navCtrl.push(LoginPage);
  // }

}
