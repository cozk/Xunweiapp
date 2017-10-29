import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  // url:string='http://101.132.140.182:3000/users';
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

  edit(user):Promise<any> {
    return this.http.post(this.url + '/edit', user).toPromise().then((data) => data
    )
  }

  editpass(user):Promise<any> {
    return this.http.post(this.url + '/editpass', user).toPromise().then((data) => data
    )
  }

}
