import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchCooks'
})
export class SearchCooksPipe implements PipeTransform {
  constructor(

  ) { }
  transform(cooks: any, args?: any): any {
    if (cooks && cooks.length) {
      var new_cooks=cooks.filter(function (cook,index) {
        if(cook.cktypedetail.indexOf(args)!=-1 ||cook.ckname.indexOf(args)!=-1||cook.cktype.indexOf(args)!=-1){
          return cook;
        }
      });
      return new_cooks;
    }
  }

}
