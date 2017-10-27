import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
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
import {TabsPage} from "../tabs/tabs";
@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
  providers:[PersonalService,UsersService]
})
export class MePage {
  guanzhu:any;
  fensi:any;
  nickname:any;
  label:any;
  kinds: string ="caipu"
  _cai:any;
  _ping:any;
  _shou:any;
  _caipu:any;
  _pinglun:any;
  _shoucang:any;
  _iAmLogin:any;
  userId:any;
  all_items:any;
  items:any
  caipulen:any;
  len:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController,
    private storage:Storage,
    private perSer:PersonalService,
    private userSer:UsersService,
    private viewCtrl: ViewController,

  ) {
  }

  ionViewDidLoad() {
    console.log("11111111111,当页面加载时触发，仅在页面创建时，触发一次");
    this.storage.ready().then(() => {
      this.storage.get('isLogin').then((val) => {
        if(val){
          this._iAmLogin=true;
          this._cai=false;
          this._ping=false;
          this._shou=false;
          this.storage.get('userId').then((val) => {
            //只能传json;
            // let user = {val:val};
            this.perSer.work().then((result)=> {
              // console.log(result);
              if(result[0].cookimg){
                this._caipu=false;
                this.caipulen=result.length;
                this.len = 5;
                this.all_items=result;
                this.items=this.all_items.slice(0,5);

              }
              else{
                this._caipu=true;
              }
            })
          });
          this.storage.get('nickname').then((val) => {
            let that = this;
            that.nickname = val;
          });
          this.storage.get('guanzhu').then((val) => {
            let that = this;
            that.guanzhu = val;
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
          this._cai=true;
          this._ping=false;
          this._shou=false;
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

  itemSelected(item) {
    let modelPage=this.modalCtrl.create(CookdetailPage ,{"_ckname":item.biaoti})
    modelPage.present();
  }


  doInfinite(infiniteScroll) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let item= {
          cookimg: 'assets/img/smile.png',
          biaoti: '123',
          name: '华为总经理',
        };
        this.items.push(item);
        console.log(this.items.length);
        infiniteScroll.enable(false);
        resolve();
      }, 500);
    })
  }

}
