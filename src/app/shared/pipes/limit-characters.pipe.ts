import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters',
  standalone: true
})
export class LimitCharactersPipe implements PipeTransform {

  transform(value: string, limit: number = 25, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value || value.length <= limit) {
      return value;
    }

    if (completeWords) {
      let limitIndex = value.substring(0, limit).lastIndexOf(' ');

      limitIndex = limitIndex > 0 ? limitIndex : limit;
      return `${value.substring(0, limitIndex)}${ellipsis}`;
    } else {
      return `${value.substring(0, limit)}${ellipsis}`;
    }
  }

}
