import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PersonalService {

  url:string='http://localhost:3000/personal';
  constructor(
    private http:HttpClient,
    private storage:Storage,
  ) {}



  work():Promise<any>{
    // return this.http.post(this.url+'/work',user).toPromise().then((data)=> data
    // )
    return this.storage.ready().then(()=>{
      return this.storage.get('token').then(val=>{
        let _head=new HttpHeaders({"token":val});
        return this.http.get(this.url+'/work',{headers:_head}).toPromise().then(data=>{
          return data;
        });
      });
    });
  }


  // comm(user,callback){
  //   this.http.post(this.url+'/comm',user).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
  //       callback(result);
  //     },
  //     function (error) {
  //       console.log(error.message);
  //     })
  // }
}
