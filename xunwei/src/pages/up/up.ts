import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
declare var $:any;
/**
 * Generated class for the UpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-up',
  templateUrl: 'up.html',
})
export class UpPage implements OnInit {
  buz = [''];
  mo: boolean = false;
  le: boolean = false;
  _telephone;
  _nickname;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private storage: Storage,) {
  }

  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get('userId').then((val) => {
        this._telephone=val
      });
      this.storage.get('nickname').then((val) => {
        this._nickname=val
      })
    })
  }

  ngAfterContentChecked() {
    let that = this;
    $('#upload_file0').change(function (e) {
      var file = e.target.files[0];
      that.preview0(file);
    })
    $('#upload_file1').change(function (e) {
      var file = e.target.files[0];
      that.preview1(file);
    })
    $('#upload_file2').change(function (e) {
      var file = e.target.files[0];
      that.preview2(file);
    })
    $('#upload_file3').change(function (e) {
      var file = e.target.files[0];
      that.preview3(file);
    })
    $('#upload_file4').change(function (e) {
      var file = e.target.files[0];
      that.preview4(file);
    })
    $('#upload_file5').change(function (e) {
      var file = e.target.files[0];
      that.preview5(file);
    })
    $('#upload_file6').change(function (e) {
      var file = e.target.files[0];
      that.preview6(file);
    })
  }

  preview0(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview0').empty().append($img);
    }
  }

  preview1(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': 'cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview1').empty().append($img);
    }
  }

  preview2(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview2').empty().append($img);
    }
  }

  preview3(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview3').empty().append($img);
    }
  }

  preview4(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview4').empty().append($img);
    }
  }

  preview5(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview5').empty().append($img);
    }
  }

  preview6(file) {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    var url = img.src;
    var $img = $(img).css({'width': '100%', 'height': '100%', 'object-fit': ' cover'});
    img.onload = function () {
      URL.revokeObjectURL(url);
      $('#preview6').empty().append($img);
    }
  }

  // upload() {
  //   let that = this;
    // var formdata = new FormData($('#upload_form')[0]);
    // formdata.append("caixi", _caixi);
    // formdata.append("telephone", _telephone);
    // formdata.append("author", that.ls.get('name'));
    // formdata.append("biaoti", that.ls.get('biaoti'));
    // formdata.append("gushi", that.ls.get('gushi'));
    // formdata.append("buzoua", that.ls.get('buzoua'));
    // formdata.append("buzoub", that.ls.get('buzoub'));
    // formdata.append("buzouc", that.ls.get('buzouc'));
    // formdata.append("buzoud", that.ls.get('buzoud'));
    // formdata.append("buzoue", that.ls.get('buzoue'));
    // formdata.append("buzouf", that.ls.get('buzouf'));
    // $.ajax({
    //   type: 'post',
    //   url: 'http://101.132.140.182:3000/personal/uploadc',
    //   data: formdata,
    //   async: false,
    //   cache: false,
    //   contentType: false,
    //   processData: false,
    //   success: function (result) {
    //     if (result.stateCode == 'e005') {
    //       alert('没有上传图片');
    //     } else if (result.stateCode == 'e004') {
    //       alert('e004');
    //     } else if (result.stateCode == 0) {
    //       alert('fail');
    //     } else if (result.stateCode == 1) {
    //       that.router.navigate(['/personal-center']);
    //     }
    //   },
    //   error: function (err) {
    //     alert('error');
    //   }
    // })
  // }

  touprecipes(uprecipes_form) {
    let that = this;
    let _caixi;
    let _telephone;
    let _nickname;
    let _biaoti;
    let _gushi;
    let _buzoua;
    let _buzoub;
    let _buzouc;
    let _buzoud;
    let _buzoue;
    let _buzouf;
    if ($("#caixi").val() == null && $("#title").val() == null && $("#gushi").val() == null && $("#buzou1").val() == null && $("#buzou2").val() == null && $("#buzou3").val() == null && $("#buzou4").val() == null && $("#buzou5").val() == null && $("#buzou6").val() == null) {
      alert('请填写完整步骤');
      return;
    }
    else {

        if ($("#caixi").val() == 0) {
          _caixi='家常';
          // that.storage.set('caixi', '家常');
        }
        if ($("#caixi").val() == 1) {
          _caixi='中华';
          // that.storage.set('caixi', '中华');
        }
        if ($("#caixi").val() == 2) {
          _caixi='外国';
          // that.storage.set('caixi', '外国');
        }
        if ($("#caixi").val() == 3) {
          _caixi='烘焙';
          // that.storage.set('caixi', '烘焙');
        }
        _biaoti=$("#title").val()
        _gushi=$("#gushi").val()
        _buzoua=$("#buzou1").val()
        _buzoub=$("#buzou2").val()
        _buzouc=$("#buzou3").val()
        _buzoud=$("#buzou4").val()
        _buzoue=$("#buzou5").val()
        _buzouf=$("#buzou6").val()

        // that.storage.set('biaoti', $("#title").val());
        // that.storage.set('gushi', $("#gushi").val());
        // that.storage.set('buzoua', $("#buzou1").val());
        // that.storage.set('buzoub', $("#buzou2").val());
        // that.storage.set('buzouc', $("#buzou3").val());
        // that.storage.set('buzoud', $("#buzou4").val());
        // that.storage.set('buzoue', $("#buzou5").val());
        // that.storage.set('buzouf', $("#buzou6").val());

      // that.upload();

      var formdata = new FormData($('#upload_form')[0]);
      formdata.append("caixi", _caixi);
      formdata.append("telephone", that._telephone);
      formdata.append("author", that._nickname);
      formdata.append("biaoti", _biaoti);
      formdata.append("gushi", _gushi);
      formdata.append("buzoua", _buzoua);
      formdata.append("buzoub", _buzoub);
      formdata.append("buzouc", _buzouc);
      formdata.append("buzoud", _buzoud);
      formdata.append("buzoue", _buzoue);
      formdata.append("buzouf", _buzouf);
      $.ajax({
        type: 'post',
        url: 'http://localhost:3000/personal/uploadc',
        data: formdata,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (result) {
          if (result.stateCode == 'e005') {
            alert('没有上传图片');
          } else if (result.stateCode == 'e004') {
            alert('e004');
          } else if (result.stateCode == 0) {
            alert('fail');
          } else if (result.stateCode == 1) {
            that.navCtrl.push(TabsPage);
          }
        },
        error: function (err) {
          alert('error');
        }
      })
    }
  }












  toadd() {
    $(".del").removeAttr("disabled");
    this.le = false;
    if (this.buz.length < 6) {
      this.mo = false;
      this.buz.push(' ');
      $(".add").removeAttr("disabled");
    }
    else {
      this.mo = true;
      $(".add").attr({"disabled": "disabled"});
    }

  }

  todel() {
    if (this.buz.length == 1) {
      this.le = true;
      this.mo = false;
      $(".del").attr({"disabled": "disabled"});
    } else {
      this.le = false;
      this.mo = false;
      this.buz.shift();
      $(".del").removeAttr("disabled");
      $(".add").removeAttr("disabled");
    }
  }

  toback() {
    this.viewCtrl.dismiss();
  }

}
