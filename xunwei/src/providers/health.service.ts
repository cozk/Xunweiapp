import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HealthService {
  url: string = 'http://101.132.140.182:3000/health';

  constructor(private http: HttpClient) {
  }

  // getAllHealth(callback) {
  //   this.http.get(this.url).subscribe(function (result) {
  //     callback(result);
  //     console.log(result);
  //   });
  // }
  getAllHealth():Promise<any>{
    return this.http.get(this.url).toPromise().then((data)=>data)
  }

  // getDetailHealth(title, callback) {
  //   this.getAllHealth(function (_healthbody) {
  //     let ho = _healthbody.filter(function (item, index) {
  //       if (item.healthtitle == title) {
  //         return item;
  //       }
  //     });
  //     callback(ho);
  //   });
  // }
  getDetailHealth(title):Promise<any>{
    return this.getAllHealth().then(data=>{
      for(let item of data){
        if(item.healthtitle===title){
          return item;
        }
      }
    })
  }
  // getIndexHealth(callback) {
  //   this.getAllHealth(function (_healthbody) {
  //     let ho = _healthbody.filter(function (item, index) {
  //       if (item.index == '1') {
  //         return item;
  //       }
  //     });
  //     callback(ho);
  //   });
  // }
}
