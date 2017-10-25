import {Component} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ToastController,
  App,
  ViewController,
  ModalController
} from 'ionic-angular';//导入页面跳转模块
// import {TabsPage} from '../../pages/tabs/tabs';
import {MePage} from '../me/me'
import {Storage} from '@ionic/storage';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import {RegisterPage} from '../register/register';
import {UsersService} from '../../providers/users.service';
import {TabsPage} from '../tabs/tabs';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  username: any;
  password: any;

  constructor(private navCtrl: NavController, //声明页面跳转变量
              private navParams: NavParams,//页面接收值
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private viewCtrl: ViewController,
              public modalCtrl: ModalController,
              private appCtrl: App,
              private storage: Storage,
              private userSer: UsersService,
              private formBuilder: FormBuilder) {
    //Validators 验证器 compose 编译
    this.loginForm = this.formBuilder.group({
      telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.username = this.loginForm.controls['telephone'];
    this.password = this.loginForm.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
      if (result) {
        console.log(result);
        if (result.stateCode === 1) {
          this.storage.ready().then(() => {
            this.storage.set('isLogin', true);
            this.storage.set('token', result.token);
            this.storage.set('telephone', result.telephone);
            this.storage.set('name', result.name);
            this.storage.set('icon', result.icon)
          });
          console.log("登录success");
          console.log("登录页面消失");
          // this.viewCtrl.dismiss()
          this.navCtrl.push(TabsPage);
          // this.navCtrl.pop(MePage);
          // console.log('Login创建TabsPage....create TabsPage');
          // let modelPage = this.modalCtrl.create(TabsPage);
          // modelPage.present();
        } else {
          let toast = this.toastCtrl.create({
            message: '用户名或密码错误',
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

  ionViewDidLeave() {

  }
}






