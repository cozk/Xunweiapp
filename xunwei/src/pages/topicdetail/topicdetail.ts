import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {HottopicService} from './../../providers/hottopic.service';
/**
 * Generated class for the TopicdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topicdetail',
  templateUrl: 'topicdetail.html',
  providers:[HottopicService]
})
export class TopicdetailPage {
topic:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hs:HottopicService,
    public ViewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    let title=this.navParams.get('topic_title');
    this.hs.getDetailTopic(title).then(topicDetail=>{
      this.topic=topicDetail;
    })
  }

  back() {
    this.ViewCtrl.dismiss();
  }

}
