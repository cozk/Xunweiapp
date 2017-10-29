
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class CommentService {
  url:string='http://101.132.140.182:3000/forumpl';
  constructor(
    private http:HttpClient
  ) {}

  getAllPinglun():Promise<any>{
    return this.http.get(this.url).toPromise().then((data)=>data)
  }

  getDetailPinglun(title):Promise<any>{
    return this.getAllPinglun().then(data=> {
      if(data && data.length){
        let ho = data.filter(function (item, index) {
          if (item.pingluntitle == title) {
            return item;
          }
        });
        return (ho);
      }
    })
  }


}
