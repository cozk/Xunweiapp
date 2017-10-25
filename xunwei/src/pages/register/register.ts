import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController ,ViewController,App} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import {UsersService} from '../../providers/users.service';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerForm:FormGroup;
  username: any;
  password: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private viewCtrl: ViewController,
              private appCtrl: App,
              private storage: Storage,
              private userSer: UsersService,
              private formBuilder: FormBuilder
  ) {
    //Validators 验证器 compose 编译
    this.registerForm = this.formBuilder.group({
      telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.username = this.registerForm.controls['telephone'];
    this.password = this.registerForm.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  toback(){
    this.viewCtrl.dismiss();
  }
  register(){

  }
}
