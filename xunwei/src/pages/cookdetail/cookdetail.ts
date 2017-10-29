import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, ModalController, ToastController} from 'ionic-angular';
import {CookbookService} from "../../providers/cookbook.service"
import {CookcommentPage} from "../cookcomment/cookcomment"
import {CommentService} from "../../providers/comment.service"//评论服务
import {AddclService} from "../../providers/addcl.service";
import {FollowService} from "../../providers/follow.service";
import { Storage } from '@ionic/storage';
import { LoginPage } from'../login/login';

declare var $:any;
/**
 * Generated class for the CookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cookdetail',
  templateUrl: 'cookdetail.html',


})
export class CookdetailPage {
  cookDetail:any;
  _comment:any;
  collectred:boolean=true;
  showComment:boolean=false;
  Login:boolean=false;
  Tel:any;
  Icon:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController,
    public cookbookSer:CookbookService,
    public modalCtrl:ModalController,
    public commentSer:CommentService,
    public followSer:FollowService,
    public ac:AddclService,
    private toastCtrl: ToastController,
    private storage:Storage

  ) {
  }
  back() {

      this.viewCtrl.dismiss();
    // this.navCtrl.push(TabsPage);

  }

  ionViewDidLoad() {

    this.storage.get('isLogin').then((val) => {
      if(val){
        this.Login=true;
        this.storage.get('userId').then((tel) => {
          let that = this;
          that.Tel = tel;
        });
        this.storage.get('icon').then((icon) => {
          let that = this;
          that.Icon = icon;
        });
      }
    });

    let title=this.navParams.get('_ckname');
    this.cookbookSer.getDetailCookbook(title).then(cookDetail=>{
      this.cookDetail=cookDetail;
    });

    if(this.Login){
      let that =this;
      that.ac.searchCollections([{"ckid":that.cookDetail.ckid},{"cltelephone": that.Tel }],function (result) {
        console.log('AA');
        console.log(result);
        console.log('BB');
        if(result==1){
          that.collectred=false;
        }
      });

      that.followSer.searchgz([{"atedtelephone":that.cookDetail.cktelephone},{"attelephone":that.Tel }],function (result) {
        console.log('gg');
        if(result.slice(9,10)){
          console.log('gg');
          $('.gzbtn').html('已关注');
        }
      });

    }
  //  加载评论
    this.commentSer.getDetailPinglun(title).then(comment=>{
      this._comment=comment;
      if(comment.length){
        this.showComment=true;
      }
    });



  }
//
  toComment(item){
    if(this.Login){
      let modelPage=this.modalCtrl.create(CookcommentPage,{"_ckname": item});
      modelPage.onDidDismiss(data => {
        console.log(data);
      });
      modelPage.present();
      // this.viewCtrl.dismiss();
    }else{
      let modelPage=this.modalCtrl.create(LoginPage);
      modelPage.present();
    }

  }
  //关注
  follow(authortel){

    if(this.Login){
      let that=this;
      let content=[{"atedtelephone":authortel},{"attelephone":that.Tel}];
      console.log(content);
      console.log('tong');
      if($('.gzbtn').html()=='加关注'){
        that.followSer.addat(content,function (result) {
          if(result!=0){
            console.log('tongtong');
            $('.gzbtn').html('已关注');
            that.followSer.addguanzhu(content,function (result) {
              that.followSer.addfensi(content,function (result) {
              })
            })
          }
        })
      }else{
        that.followSer.deleteat(content,function (result) {
          if(result!=0){
            $('.gzbtn').html('加关注');
            that.followSer.deleteguanzhu(content,function (result) {
              that.followSer.deletefensi(content,function (result) {
              })
            })
          }
        })
      }

    }else{
      let modelPage=this.modalCtrl.create(LoginPage);
      modelPage.present();
    }


    }
  //收藏
  addCollect(){
    if(this.Login){
      let that=this;
      // that.collectred=!that.collectred;
      let content=[{"ckid":that.cookDetail.ckid},{"cltelephone":that.Tel}];
      if(that.collectred){
        this.ac.addcl(content,function (result) {
          if(result!=0){
            that.collectred=!that.collectred;
            console.log(that.collectred);
            let toast = that.toastCtrl.create({
              message: '收藏成功',
              duration: 1000,
            });
            toast.present();
            that.ac.addrenqi([{"ckid":that.cookDetail.ckid}],function (result) {
            });

          }
        })
      }
      else{
        let content=[{"ckid":that.cookDetail.ckid},{"cltelephone":that.Tel}];
        that.ac.deleteCollections(content,function (result) {
          if(result!=0){
            that.collectred=!that.collectred;
            console.log(that.collectred);
            let toast = that.toastCtrl.create({
              message: '取消收藏成功',
              duration: 1000,
            });
            toast.present();
            that.ac.deleterenqi([{"ckid":that.cookDetail.ckid}],function (result) {
            });

          }
        })
      }
    }else{

      let modelPage=this.modalCtrl.create(LoginPage);
      modelPage.present();
    }

    }



}
