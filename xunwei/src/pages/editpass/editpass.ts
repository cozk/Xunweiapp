import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../../providers/users.service';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the EditpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editpass',
  templateUrl: 'editpass.html',
})
export class EditpassPage {
  _istrue:boolean=false;
  match:boolean = false;
  editpwdForm: FormGroup;
  newpassword: any;
  password: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private userSer:UsersService,
    private storage:Storage,
  ) {
    this.editpwdForm = formBuilder.group({
      password:['', Validators.compose([Validators.minLength(6), Validators.maxLength(15), Validators.required])],
      newpassword: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(15), Validators.required])],
    });
    this.password = this.editpwdForm.controls['password'];
    this.newpassword = this.editpwdForm.controls['newpassword'];
  }

  ionViewDidLoad() {

  }

  editpwd(user){
    this.storage.ready().then(() => {
      this.storage.get('password').then((val) => {
        if(val == user.password){
          if(user.password != user.newpassword){
            this.storage.get('userId').then((val) => {
              let use = [{password:user.newpassword},{telephone: val}];
                this.userSer.editpass(use).then((result) => {
                  if (result) {
                    if (result.stateCode === 1) {
                      this.storage.ready().then(() => {
                        this.storage.set('password', user.newpassword);
                        this.navCtrl.push(TabsPage);
                      })
                    }
                  }
                })
            })
          }
          else{
            this.match = true;
          }
        }
        else{
          this._istrue = true;
        }
      })
    })
  }
  toback() {
    this.viewCtrl.dismiss();
  }
}
