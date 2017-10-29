import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { GuanzhuPage } from '../guanzhu/guanzhu';
import { FensiPage } from '../fensi/fensi';
import { EditPage } from '../edit/edit';
import { UpPage } from'../up/up';
import { LoginPage } from'../login/login';
import { CookdetailPage } from'../cookdetail/cookdetail';
import { Storage } from '@ionic/storage';
import { PersonalService } from '../../providers/personal.service';
import { UsersService } from '../../providers/users.service';

import 'rxjs/add/operator/toPromise';

@IonicPage()

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
  providers:[PersonalService,UsersService]
})
export class MePage implements OnInit{
  guanzhu:any;
  fensi:any;
  nickname:any;
  icon:any;
  label:any;
  kinds: string ="caipu"
  _iAmLogin:any;
  userId:any;
  len:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController,
    private storage:Storage,
    private perSer:PersonalService,
    private userSer:UsersService,
  ) {
  }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('isLogin').then((val) => {
        if(val){
          this._iAmLogin=true;
          this.storage.get('nickname').then((val) => {
            let that = this;
            that.nickname = val;
          });
          this.storage.get('guanzhu').then((val) => {
            let that = this;
            that.guanzhu = val;
          });
          this.storage.get('icon').then((val) => {
            let that = this;
            that.icon = val;
          });
          this.storage.get('fensi').then((val) => {
            let that = this;
            that.fensi = val;
            if(that.fensi>10){
              that.label='恭喜成为美食达人';
            }else{
              that.label='正在成为美食达人的路上';
            }
          });
        }else{
          this._iAmLogin=false;
        }
      })
    });
  }


  toLogin(){
    const modelPage=this.modalCtrl.create(LoginPage);
    modelPage.present();
  }
  toSetting(){
    this.storage.ready().then(() => {
      this.storage.get('isLogin').then((val) => {
        if (val) {
          const modelPage=this.modalCtrl.create(SettingPage);
          modelPage.present();
        }
        else{
          const modelPage=this.modalCtrl.create(LoginPage);
          modelPage.present();
        }
      })
    })

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
  toUp(){
    this.storage.ready().then(() => {
      this.storage.get('isLogin').then((val) => {
        if (val) {
          const modelPage=this.modalCtrl.create(UpPage);
          modelPage.present();
        }
        else{
          const modelPage=this.modalCtrl.create(LoginPage);
          modelPage.present();
        }
      })
    })
  }
  itemSelectedcaipu(item) {
    let modelPage=this.modalCtrl.create(CookdetailPage ,{"_ckname":item.biaoti})
    modelPage.present();
  }

}
