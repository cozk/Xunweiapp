import {Component} from '@angular/core';
import {NavController,ModalController} from 'ionic-angular';
import {HealthService} from '../../providers/health.service'
import {HealthDetailPage} from '../health-detail/health-detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: any;
  all_items: any;
  loadMore = [];
  i = 7;
  j = 0;

  constructor(public navCtrl: NavController,
              public  healthSer: HealthService,
              public  modalCtrl: ModalController,
  ) {


  }

  ionViewDidLoad() {
    console.log("11111111111,当页面加载时触发，仅在页面创建时，触发一次");
    this.healthSer.getAllHealth().then(data => {
      this.all_items = data;
      this.items = this.all_items.slice(0, 5);
      console.log("11111111111");
      console.log(this.items);
    })
  }


  doInfinite(infiniteScroll) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.j = this.j + 5;
        let item = this.all_items.slice(this.j, this.j + 5);
        this.items.push(item[0], item[1], item[2], item[3], item[4]);
        console.log("22222222222");
        console.log(this.items);
        console.log(this.items.length);

        if (this.items.length == 40) {
          infiniteScroll.enable(false);
        }
        resolve();
      }, 500);
    })
  }

  itemSelected(item) {
    // item && console.log(item.postId);
    // item && this.navCtrl.push(PostDetailPage,{"post_id":item.postId});
    let modalPage = this.modalCtrl.create(HealthDetailPage, {"health_title": item.healthtitle})
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
    modalPage.present();

  }
}
