import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/exercise3.interface';

@Pipe({
  name: 'blankSpace',
})
export class BlankSpacePipe implements PipeTransform {
  transform(user: User): string | boolean {
    if (user.subscription === false) {
      return '';
    }

    return true;
  }
}
