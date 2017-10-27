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



  work(user):Promise<any>{
    return this.http.post(this.url+'/work',user).toPromise().then((data)=> data
    )
  }

  comm(user):Promise<any>{
    return this.http.post(this.url+'/comm',user).toPromise().then((data)=> data
    )
  }


}
