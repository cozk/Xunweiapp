import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HottopicService {
  // url:string='http://101.132.140.182:3000/forum';
  url:string='http://127.0.0.1:3000/forum';
  constructor(
    private http:HttpClient
  ) {}

  // getAllHottopic(callback){
  //   this.http.get(this.url).subscribe(function (result) {
  //     callback(result);
  //     console.log(result);
  //   });
  // }
  getAllHottopic():Promise<any>{
    return this.http.get(this.url+'/hot').toPromise().then((data)=> data
    )
  }

  getDetailTopic(title):Promise<any>{
    return this.getAllHottopic().then(data=>{
      for(let item of data){
        if(item.title===title){
          return item;
        }
      }
    })
  }
}
