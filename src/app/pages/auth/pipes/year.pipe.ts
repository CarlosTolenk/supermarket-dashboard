import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'year'
})
export class YearPipe extends DatePipe implements PipeTransform {
  // @ts-ignore
  transform(date: Date): any {
    return super.transform(date, 'y');
  }
}