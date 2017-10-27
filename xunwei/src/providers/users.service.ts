import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  url:string='http://localhost:3000/users';
  constructor(
    private http:HttpClient,

  ) {

  }

  login(user):Promise<any>{
    return this.http.post(this.url+'/login',user).toPromise().then((data)=> data)
  }

  register(user):Promise<any>{
    return this.http.post(this.url+'/regist',user).toPromise().then((data)=>data)
  }
  // register(user,callback){
  //   this.http.post(this.url+'/regist',user).subscribe(function (result) {//subscribe（）异步处理，如果需要用返回的数据，最好把方法写在里面。
  //       callback(result);
  //     },
  //     function (error) {
  //       console.log(error.message);
  //     })
  // }
}
