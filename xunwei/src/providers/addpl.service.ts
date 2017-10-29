
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class AddplService {
  url:string='http://101.132.140.182:3000/addpl';
  constructor(
    private http:HttpClient
  ) {}

addpl(plcontent,callback){
    this.http.post(this.url+'/add',plcontent).subscribe(
      function (result) {
      callback(result);
      console.log(result)
    })
}


}
