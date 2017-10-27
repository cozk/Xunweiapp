import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'waiguo'
})
export class WaiguoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.length) {
      var new_waiguo = value.filter(function (cook, index) {
        if (cook.cktype == '外国')
          return cook;

      });
      return new_waiguo;
    }
  }


}
