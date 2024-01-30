import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listItemTitle',
})
export class ExerciseListTitlePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace('exercise_', 'Ejercicio ');
  }
}
