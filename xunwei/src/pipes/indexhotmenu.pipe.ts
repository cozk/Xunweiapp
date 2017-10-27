import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexhotmenu'
})
export class IndexhotmenuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length) {
      var new_zhonghua = value.filter(function (cook, index) {
        if (cook.ckhot == '1')
          return cook;
      });
    }
    return new_zhonghua;
  }

}
