import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController,
  ViewController,
  App
} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {TabsPage} from '../tabs/tabs';
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
  registerForm: FormGroup;
  username: any;
  password: any;
  nickname: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private viewCtrl: ViewController,
              private appCtrl: App,
              private storage: Storage,
              private userSer: UsersService,
              private formBuilder: FormBuilder) {
    //Validators 验证器 compose 编译
    this.registerForm = this.formBuilder.group({
      telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      nickname: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
    });
    this.username = this.registerForm.controls['telephone'];
    this.password = this.registerForm.controls['password'];
    this.nickname = this.registerForm.controls['nickname'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  toback() {
    this.viewCtrl.dismiss();
  }

  register(user) {
    this.userSer.register(user).then((result) => {
      if (result) {
        if (result.stateCode === 1) {
          this.storage.ready().then(() => {
            this.storage.set('isLogin', true);
            this.storage.set('userId', user.telephone);
            this.storage.set('token', result.token);
            this.storage.set('nickname', user.nickname);
            this.storage.set('fensi', result.fensi);
            this.storage.set('guanzhu', result.guanzhu);
            this.storage.set('icon', result.icon);
          });
          this.viewCtrl.dismiss();
          this.navCtrl.push(TabsPage);
        } else if (result.stateCode === 0) {
          let toast = this.toastCtrl.create({
            message: '该用户已注册,可直接登录',
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
