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
    return this.http.post(this.url+'/login',user).toPromise().then((data)=> data
    )
  }

}
