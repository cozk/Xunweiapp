import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
declare var $:any;
/**
 * Generated class for the EditiconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editicon',
  templateUrl: 'editicon.html',
})
export class EditiconPage implements OnInit{
  icon: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage:Storage,
  ) {
  }

  ngOnInit() {
    let that = this;
    let _val;
    this.storage.ready().then(() => {
      this.storage.get('icon').then((val) => {
        this.icon = val;
      });
      this.storage.get('userId').then((val) => {
            _val = val;
      })
    })
    $('#upload_file').change(function (e) {
      var file = e.target.files[0];
      preview(file);
      upload();
    });

    function preview(file) {
      var img = new Image();
      img.src = URL.createObjectURL(file);
      var url = img.src;
      var $img = $(img).css({'width':'100%','height':'100%','object-fit':' cover'});
      img.onload = function () {
        URL.revokeObjectURL(url);
        $('#preview').empty().append($img);
      }
    }

    function upload() {
      var  formdata = new FormData($('#upload_form')[0]);
      formdata.append("telephone",_val);
      $.ajax({
        type: 'post',
        url: 'http://127.0.0.1:3000/users/upload',
        data: formdata,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (result) {
          if (result.stateCode == 'e005') {
            alert('服务错误');
          } else if(result.stateCode == 'e004'){
            alert('数据错误');
          }else if (result.icon == '0.jpg') {
            that.storage.ready().then(()=> {
              that.storage.set('icon', result.icon);
            })
            alert('头像重复');
          } else if(result.stateCode == 0){
            alert('上传失败0');
          }else{
            that.storage.ready().then(()=> {
              that.storage.set('icon', result.icon);
            })
          }
        },
        error: function (err) {
          alert('上传失败');
        }
      })
    }
  }

  toback() {
    this.viewCtrl.dismiss();
  }
  toupload(){
    this.navCtrl.push(TabsPage);
  }
}
