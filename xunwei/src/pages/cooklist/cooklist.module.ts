import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CooklistPage } from './cooklist';

@NgModule({
  declarations: [
    CooklistPage,
  ],
  imports: [
    IonicPageModule.forChild(CooklistPage),
  ],
})
export class CooklistPageModule {}
