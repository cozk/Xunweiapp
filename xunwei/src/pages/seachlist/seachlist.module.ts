import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeachlistPage } from './seachlist';

@NgModule({
  declarations: [
    SeachlistPage,
  ],
  imports: [
    IonicPageModule.forChild(SeachlistPage),
  ],
})
export class SeachlistPageModule {}
