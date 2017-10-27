import {Component} from '@angular/core';
import {
  NavController, NavParams, AlertController, ToastController, App, ViewController, ModalController
} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {Storage} from '@ionic/storage';
import {UsersService} from '../../providers/users.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {RegisterPage} from '../register/register';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersService]
})
export class LoginPage {
  loginForm: FormGroup;
  username: any;
  password: any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private viewCtrl: ViewController,
              private appCtrl: App,
              private storage: Storage,
              private userSer: UsersService,
              private formBuilder: FormBuilder,
              public modalCtrl: ModalController,) {
    this.loginForm = formBuilder.group({
      telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.required])]
    });
    this.username = this.loginForm.controls['telephone'];
    this.password = this.loginForm.controls['password'];
  }


  ionViewDidLoad() {

  }

  back() {
    this.viewCtrl.dismiss();
  }

  toRegister() {
    let modelPage = this.modalCtrl.create(RegisterPage);
    modelPage.present();
  }

  login(user) {
    this.userSer.login(user).then((result) => {
      console.log(result);
      if (result) {
        if (result.stateCode === 1) {
          this.storage.ready().then(() => {
            this.storage.set('isLogin', true);
            this.storage.set('userId', result.telephone);
            this.storage.set('token', result.token);
            this.storage.set('nickname', result.name);
            this.storage.set('fensi', result.fensi);
            this.storage.set('guanzhu', result.guanzhu);
            this.storage.set('icon', result.icon);
          });
          this.viewCtrl.dismiss();
          this.navCtrl.push(TabsPage);
        } else if (result.stateCode === 2) {
          let toast = this.toastCtrl.create({
            message: '密码错误',
            duration: 3000
          });
          toast.present();
        } else if (result.stateCode === 3) {
          let toast = this.toastCtrl.create({
            message: '该手机号不存在，请先注册！',
            duration: 3000
          });
          toast.present();
        }
      } else {
        let toast = this.toastCtrl.create({
          message: '服务器异常',
          duration: 3000
        });
        toast.present();
      }
    })
  }

}
