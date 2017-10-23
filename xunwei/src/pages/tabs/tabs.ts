import { Component,ViewChild  } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MePage;
  @ViewChild('rootTabs') tabRef:any;
  constructor() {

  }
  ionViewDidEnter() {
    this.tabRef.select(0);
  }
}
