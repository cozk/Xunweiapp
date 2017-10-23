import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthDetailPage } from './health-detail';

@NgModule({
  declarations: [
    HealthDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthDetailPage),
  ],
})
export class HealthDetailPageModule {}
