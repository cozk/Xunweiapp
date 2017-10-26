import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PersonalService } from '../../providers/personal.service';

import { CookdetailPage } from'../cookdetail/cookdetail';
/**
 * Generated class for the ShoucangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoucang',
  templateUrl: 'shoucang.html',
  providers:[PersonalService]
})
export class ShoucangPage implements OnInit{
  all_items:any;
  items:any;
  _shoucang:any;
  _shou:any;
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
          this._shou=false;
          this.storage.get('userId').then((val) => {
            let user = {cltelephone:val};
            this.perSer.comm(user).then((result)=>{
              if(result && result[0].pingluntitle){
                this._shoucang=false;
                this.all_items=result;
                this.items=this.all_items.slice(0,5);
              }
              else{
                this._shoucang=true;
              }
            })
          });
        }
        else{
          this._shou=true;
        }
      })
    })
  }

}
