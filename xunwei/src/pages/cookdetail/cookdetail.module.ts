import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookdetailPage } from './cookdetail';

@NgModule({
  declarations: [
    CookdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CookdetailPage),
  ],
})
export class CookdetailPageModule {}
