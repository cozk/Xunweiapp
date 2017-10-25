import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class IndexService {
  // url:string='http://101.132.140.182:3000/cookbook';
  url:string='http://127.0.0.1:3000/cookbook';
  constructor(
    private http:HttpClient
  ) {}


  getAllCookbook():Promise<any>{
    return this.http.get(this.url).toPromise().then((data)=>data)

  }
}
