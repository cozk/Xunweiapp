import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,ModalController} from 'ionic-angular';
import {HottopicService} from './../../providers/hottopic.service';
import {TopicdetailPage} from '../topicdetail/topicdetail';
/**
 * Generated class for the HomehottopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homehottopic',
  templateUrl: 'homehottopic.html',
  providers:[HottopicService]
})
export class HomehottopicPage {
  alltopic:any;
  allhottopic:any;
  j = 4;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ViewCtrl: ViewController,
    public hs:HottopicService,
    public  modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    this.hs.getAllHottopic().then(data=>{
      this.alltopic=data;
      console.log(this.alltopic);
      this.allhottopic=this.alltopic.slice(0,4);
    });
  }
  back() {
    this.ViewCtrl.dismiss();
  }

  doInfinite(infiniteScroll) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let item = this.alltopic.slice(this.j,this.j+1);
        console.log(item);
        this.j=this.j+1;
        this.allhottopic.push(item[0]);
        if (this.allhottopic.length == 6) {
          infiniteScroll.enable(false);
        }
        resolve();
      }, 500);
    })
  }

  topicSelected(item) {
    let modalPage = this.modalCtrl.create(TopicdetailPage, {"topic_title": item.title})
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();

  }

}
