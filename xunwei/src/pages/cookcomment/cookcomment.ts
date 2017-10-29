import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController,ModalController} from 'ionic-angular';
import {AddplService} from "../../providers/addpl.service"
import {CommentService} from "../../providers/comment.service";
import {CookdetailPage} from'../cookdetail/cookdetail';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the CookcommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookcomment',
  templateUrl: 'cookcomment.html',
})
export class CookcommentPage {
  _pinglun:any;
  cookname:any;
  _author:any;
  _nikename:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    private pa:AddplService,
    private commentSer:CommentService,
    private  storage:Storage,
    private toastCtrl: ToastController,
    public modalCtrl:ModalController


  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookcommentPage');
    this.cookname=this.navParams.get('_ckname');
    this._author=this.storage.get('name');
    console.log(this._author);
  }
  back() {


    // this.navCtrl.push(CookdetailPage,{"_ckname": this.cookname});
    // let modelPage=this.modalCtrl.create(CookdetailPage,{"_ckname": this.cookname});
    // modelPage.onDidDismiss(data => {
    //   console.log(data);
    // });
    // modelPage.present();
    this.viewCtrl.dismiss();
  }
  //发布评论
  sendComment(comment){
    this.storage.ready().then(()=> {
      this.storage.get('nickname').then((val)=>{
        this._nikename=val;
        console.log("nickname");
        console.log(this._nikename);

    console.log(comment.length);
    if(comment && comment.trim().length>0){
      let content=[{"content":comment},{"id":this._nikename},{"title":this.cookname}];
      console.log(content);
      this.pa.addpl(content,function (result) {

      });
      let toast = this.toastCtrl.create({
        message: '发布成功 ',
        duration: 3000,
      });
      toast.present();

      // let modelPage=this.modalCtrl.create(CookdetailPage,{"_ckname": this.cookname});
      // modelPage.onDidDismiss(data => {
      //   console.log(data);
      // });
      // modelPage.present();
       this.viewCtrl.dismiss();
    }
    else{
      let toast = this.toastCtrl.create({
        message: '请输入要评论的内容(～￣▽￣)～ ',
        duration: 3000,
      });
      toast.present();
    }
      })
    });
  }

}
