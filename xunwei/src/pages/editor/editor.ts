import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../providers/users.service';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-editor',
  templateUrl: 'editor.html',
})
export class EditorPage {

  editForm: FormGroup;
  nickname: any;
  password: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private userSer:UsersService,
    private storage:Storage,
  ) {
    this.editForm = formBuilder.group({
      nickname: ['', Validators.compose([Validators.minLength(1), Validators.maxLength(10), Validators.required])],
   });
    this.nickname = this.editForm.controls['nickname'];
  }

  ionViewDidLoad() {

  }

  edit(user) {
    this.storage.ready().then(() => {
      this.storage.get('userId').then((val) => {
        let use =[user,{telephone:val}];
        this.userSer.edit(use).then((result) => {
          if (result) {
            if (result.stateCode === 1) {
              this.storage.ready().then(() => {
                this.storage.set('nickname', user.nickname);
                this.navCtrl.push(TabsPage);
              })
            }
          }
        })
      })
    })

  }

  toback() {
    this.viewCtrl.dismiss();
  }

}
