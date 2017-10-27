import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jiachang'
})
export class JiachangPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value && value.length){
      var new_jiachang = value.filter(function (cook,index) {
        if(cook.cktype=='家常')
          return cook;

      });
      return new_jiachang;
    }

  }


}
