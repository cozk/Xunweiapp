import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'huatijiequ'
})
export class HuatijiequPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let len=args || 60;
    if(value && value.length>=len-3){
      return value.substring(0,len-3)+'...';
    }else{
      return value;
    }
   }


}
