
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class AddclService {
  // url:string='http://101.132.140.182:3000/addcl';
  url:string='http://localhost:3000/addcl';
  constructor(
    private http:HttpClient
  ) {}

  addcl(clcontent,callback){
    this.http.post(this.url+'/add',clcontent).subscribe(
      function (result) {
        callback(result);
        console.log(result)
      })
  }

  getAllCollections(cltel,callback){
    this.http.get(this.url+'/getcl',cltel).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

  getallcl(cltel,callback){
    this.http.post(this.url+'/getallcl',cltel).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }
  getallgz(cltel,callback){
    this.http.post(this.url+'/getallgz',cltel).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }
  getallfs(cltel,callback){
    this.http.post(this.url+'/getallfs',cltel).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }
  searchCollections(ckid,callback){
    this.http.post(this.url+'/searchcl',ckid).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

  deleteCollections(ckid,callback){
    this.http.post(this.url+'/deletecl',ckid).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

  addrenqi(ckid,callback){
    this.http.post(this.url+'/addrenqi',ckid).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

  deleterenqi(ckid,callback){
    this.http.post(this.url+'/deleterenqi',ckid).subscribe(function (result) {
      callback(result);
      console.log(result);
    })
  }

}
