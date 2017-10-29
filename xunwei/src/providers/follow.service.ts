/**
 * Created by 你们的爸爸 on 2017/9/21.
 */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class FollowService {
  url:string='http://101.132.140.182:3000/forum';
  constructor(
    private http:HttpClient
  ) {}

  getAllPost(callback){
    this.http.get(this.url+'/all').subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }
  getAllCai(callback){
    this.http.get(this.url+'/allcai').subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

  getDetail(title,callback){
    this.getAllPost(function (_forumbody) {
      let ho=_forumbody.filter(function (item,index) {
        if(item.title==title){
          return item;
        }
      });
      callback(ho);

    })
  }
  getDetailCai(title,callback){
    this.getAllCai(function (_forumbody) {
      let ho=_forumbody.filter(function (item,index) {
        if(item.biaoti==title){
          return item;
        }
      });
      callback(ho);

    })
  }
  addat(clcontent,callback){
    this.http.post(this.url+'/addat',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }







  deleteat(clcontent,callback){
    this.http.post(this.url+'/deleteat',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addguanzhu(clcontent,callback){
    this.http.post(this.url+'/addguanzhu',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addliulan(clcontent,callback){
    this.http.post(this.url+'/addliulan',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addcailiulan(clcontent,callback){
    this.http.post(this.url+'/addcailiulan',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  deleteguanzhu(clcontent,callback){
    this.http.post(this.url+'/deleteguanzhu',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  addfensi(clcontent,callback){
    this.http.post(this.url+'/addfensi',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  deletefensi(clcontent,callback){
    this.http.post(this.url+'/deletefensi',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  searchgz(clcontent,callback){
    this.http.post(this.url+'/searchgz',clcontent).subscribe(
      function (result) {
        callback(result);
      })
  }

}
