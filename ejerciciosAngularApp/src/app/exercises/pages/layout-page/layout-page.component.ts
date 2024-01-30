import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public exercises: string[] = [
    'exercise_1',
    'exercise_2',
    'exercise_3',
    'exercise_4',
    'exercise_5',
    'exercise_6',
    'exercise_7',
  ];
}
