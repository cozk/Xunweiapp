import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CookbookService {
  url: string = 'http://101.132.140.182:3000/cookbook';
  constructor(
    private http:HttpClient
  ) {}

  // getAllCookbook(callback){
  //   this.http.get(this.url).subscribe(function (result) {
  //     callback(result);
  //     console.log(result);
  //   })
  // }
  getAllCookbook():Promise<any>{
    return this.http.get(this.url).toPromise().then((data)=>data)
  }


  // getDetailCookbook(biaoti,callback){
  //   this.getAllCookbook(function (_forumbody) {
  //     let ho=_forumbody.filter(function (item,index) {
  //       if(item.ckname==biaoti){
  //         return item;
  //       }
  //     });
  //     callback(ho);
  //
  //   })
  // }
  getDetailCookbook(title):Promise<any>{
    return this.getAllCookbook().then(data=>{
      for(let item of data){
        if(item.ckname==title){
          return item;
        }
      }
    })
  }

  // getIndexCookBook(callback) {
  //   this.getAllCookBook(function (_cookbookbody) {
  //     let cb = _cookbookbody.filter(function (item, index) {
  //       if (item.ckhot == '1') {
  //         return item;
  //       }
  //     });
  //     callback(cb);
  //   });
  // }


}
