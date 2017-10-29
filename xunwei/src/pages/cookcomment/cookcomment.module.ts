import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookcommentPage } from './cookcomment';

@NgModule({
  declarations: [
    CookcommentPage,
  ],
  imports: [
    IonicPageModule.forChild(CookcommentPage),
  ],
})
export class CookcommentPageModule {}
