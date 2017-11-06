import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ngxOrderBy',
})
export class NgxOrderByPipe implements PipeTransform {
  private fields: Array<string>;
  private reverse: boolean;

  transform(values: Array<Object>, fields: Array<string>, reverse: boolean, changeIndicator: number): any {
    this.fields = fields.slice();
    this.reverse = reverse;

    values.sort(this.compare.bind(this));

    if(reverse) {
      values.reverse();
    }

    return values;
  }

  private compare(a: any, b: any): number {
    let result = 0, i = 0;

    while(result === 0 && i < this.fields.length) {
      result = this.dynamicSort(a, b, this.fields[i]);
      i++;
    }

    return result;
  }

  private dynamicSort(a: any, b: any, property: string): number {
    return a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
  }

}
