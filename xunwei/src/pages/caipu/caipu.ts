import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { PersonalService } from '../../providers/personal.service';
import { Storage } from '@ionic/storage';
import { CookdetailPage } from'../cookdetail/cookdetail';
import { UpPage } from'../up/up';
import { LoginPage } from'../login/login';

/**
 * Generated class for the CaipuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caipu',
  templateUrl: 'caipu.html',
  providers:[PersonalService]
})
export class CaipuPage implements OnInit{
  _cai:boolean;
  _caipu:boolean;
  all_items:any;
  items:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage,
    private perSer:PersonalService,
    public modalCtrl:ModalController,
  ) {
  }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('isLogin').then((val) => {
        if (val) {
          this._cai=false;
          this.storage.get('userId').then((val) => {
            //只能传json;
            let user = {userId: val};
            this.perSer.work(user).then((result) => {
              if(result.length){
                this._caipu=false;
                this.all_items=result;
                this.items=this.all_items.slice(0,5);
              }
              else{
                this._caipu=true;
              }
            })
          });
        }
        else{
          this._cai=true;
        }
      })
    })
  }
  itemSelected(item) {
    let modelPage=this.modalCtrl.create(CookdetailPage ,{"_ckname":item.biaoti})
    modelPage.present();
  }

  toUp(){
    this.storage.ready().then(() => {
      this.storage.get('isLogin').then((val) => {
        if (val) {
          this.navCtrl.push(UpPage);
        }
        else{
          this.navCtrl.push(LoginPage);
        }
      })
    })
  }
}
