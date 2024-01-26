import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrafficLightService {
  public turnLightColors = new Subject<string>();
  public iterations: number = 0;
  public colors: string[] = ['red', 'yellow', 'green'];
  public timerOn: any;

  constructor() {}

  turnOnOff(on: boolean) {
    if (on) {
      this.timerOn = setInterval(() => {
        this.turnLightColors.next(this.colors[this.iterations]);
        this.iterations++;
        if (this.iterations === 3) {
          this.iterations = 0;
          clearInterval(this.timerOn);
        }
      }, 1500);
    } else {
      clearInterval(this.timerOn);
    }
  }

  turnOn() {
    if (this.iterations === 2) {
      clearInterval(this.timerOn);
    }
  }
}
