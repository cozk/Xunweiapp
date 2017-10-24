import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { GuanzhuPage } from '../guanzhu/guanzhu';
import { FensiPage } from '../fensi/fensi';
import { EditPage } from '../edit/edit';
/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  guanzhu:any;
  fensi:any;
  nickname:any;
  label:any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController
  ) {
  }

  ionViewDidLoad() {
    this.guanzhu=1;
    this.fensi=2;
    this.nickname='Asprose';
    if(this.fensi>1){
      this.label='恭喜成为美食达人';
    }else{
      this.label='正在成为美食达人的路上';
    }
  }
  toSetting(){
    const modelPage=this.modalCtrl.create(SettingPage);
    modelPage.present();
  }
  toGuanzhu(){
    const modelPage=this.modalCtrl.create(GuanzhuPage);
    modelPage.present();
  }
  toFensi(){
    const modelPage=this.modalCtrl.create(FensiPage);
    modelPage.present();
  }
  toMydata(){
    const modelPage=this.modalCtrl.create(EditPage);
    modelPage.present();
  }
}
