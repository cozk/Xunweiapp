import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { EditiconPage } from '../editicon/editicon';
import { EditorPage } from '../editor/editor';
import { EditpassPage } from '../editpass/editpass';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {

  }

  ionViewDidLoad() {

  }

  toback() {
    this.viewCtrl.dismiss();
  }

  editor(){
    this.navCtrl.push(EditorPage);
  }
  editicon(){
    this.navCtrl.push(EditiconPage);
  }
  editpass(){
    this.navCtrl.push(EditpassPage);
  }

}
