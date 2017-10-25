import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slides: Slides;
  imgs=['index1.jpg','index2.jpg','index3.jpg'];
  constructor(public navCtrl: NavController) {

  }
  slideChanged(){
    this.slides.startAutoplay();
  }

}
