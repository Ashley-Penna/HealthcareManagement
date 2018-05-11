import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phoneFormat'})
export class PhoneFormat implements PipeTransform {
  transform(value: string, formatted: string): string {
    var res = "(" + value.slice(0, 3) + ")" + value.slice(3,6) +"-" + value.slice(6);
    return res;
  }
}