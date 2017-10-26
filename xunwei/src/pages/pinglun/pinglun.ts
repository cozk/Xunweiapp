import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PersonalService } from '../../providers/personal.service';

import { CookdetailPage } from'../cookdetail/cookdetail';
/**
 * Generated class for the PinglunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pinglun',
  templateUrl: 'pinglun.html',
  providers:[PersonalService]
})
export class PinglunPage implements OnInit{
  all_items:any;
  items:any;
  _pinglun:any;
  _ping:any;
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
          this._ping=false;
          this.storage.get('nickname').then((val) => {
            let user = {name:val};
            this.perSer.comm(user).then((result)=>{
              if(result && result[0].pingluntitle){
                this._pinglun=false;
                this.all_items=result;
                this.items=this.all_items.slice(0,5);
              }
             else{
                this._pinglun=true;
              }
            })
          });
        }
        else{
          this._ping=true;
        }
      })
    })
  }

  itemSelected(item) {
    let modelPage=this.modalCtrl.create(CookdetailPage ,{"_ckname":item.biaoti})
    modelPage.present();
  }

}
