import { Component } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-exercise7-page',
  templateUrl: './exercise7-page.component.html',
  styles: ``,
})
export class Exercise7PageComponent {
  public counter: number = 0;
  public timeInterval = interval(1000);
  public numberInterval: number = 1;
  public manualNumber: number = 1;
  public stop = new Subject();

  startCounter() {
    this.stop.next(0);
    this.counter = 0;
    this.timeInterval.pipe(takeUntil(this.stop)).subscribe(() => {
      this.counter++;
    });
  }

  stopCounter() {
    this.stop.next(0);
  }

  resetCounter() {
    this.counter = 0;
    this.stop.next(0);
  }

  countdown() {
    this.stop.next(0);
    this.counter = this.counter || 1;
    this.timeInterval.pipe(takeUntil(this.stop)).subscribe(() => {
      this.counter -= this.numberInterval;
    });
  }

  setManualcounter() {
    this.stop.next(0);
    this.counter = this.counter || 1;
    this.timeInterval.pipe(takeUntil(this.stop)).subscribe(() => {
      this.counter += this.manualNumber;
    });
  }
}
