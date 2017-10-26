import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {HealthService} from '../../providers/health.service';
/**
 * Generated class for the HealthDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health-detail',
  templateUrl: 'health-detail.html',
})
export class HealthDetailPage {
  healthDetail:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ViewCtrl: ViewController,
              public  healthSer: HealthService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthDetailPage');
    let title=this.navParams.get('health_title');
    this.healthSer.getDetailHealth(title).then(healthDetail=>{
      this.healthDetail=healthDetail;
      console.log(healthDetail);
    })
  }
  back() {
    this.ViewCtrl.dismiss();
  }
}
