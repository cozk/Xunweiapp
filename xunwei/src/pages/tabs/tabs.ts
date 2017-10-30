import { Component,ViewChild  } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MePage } from '../me/me';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MePage;
  @ViewChild('rootTabs') tabRef:any;
  constructor(
    private storage:Storage,
  ) {

  }
  ionViewDidEnter() {
    // this.storage.ready().then(() => {
    //   this.storage.get('isLogin').then((val) => {
    //     if (val) {
    //       this.tabRef.select(3)
    //     }
    //     else {
          this.tabRef.select(0);
  //       }
    //     })
    //   })
    //
    }
}
