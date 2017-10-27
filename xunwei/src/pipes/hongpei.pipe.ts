import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hongpei'
})
export class HongpeiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length) {
      var new_hongpei = value.filter(function (cook, index) {
        if (cook.cktype == '烘焙')
          return cook;

      });
      return new_hongpei;
    }
  }


}
