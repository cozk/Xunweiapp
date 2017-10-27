import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CooksearchPage } from './cooksearch';

@NgModule({
  declarations: [
    CooksearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CooksearchPage),
  ],
})
export class CooksearchPageModule {}
