import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourierPage } from './courier';

@NgModule({
  declarations: [
    CourierPage,
  ],
  imports: [
    IonicPageModule.forChild(CourierPage),
  ],
  exports: [
    CourierPage
  ]
})
export class CourierPageModule {}
