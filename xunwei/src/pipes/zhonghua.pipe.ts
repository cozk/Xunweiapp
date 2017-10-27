import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zhonghua'
})
export class ZhonghuaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length) {
      var new_zhonghua = value.filter(function (cook, index) {
        if (cook.cktype == '中华')
          return cook;

      });
      return new_zhonghua;
    }
  }


}
