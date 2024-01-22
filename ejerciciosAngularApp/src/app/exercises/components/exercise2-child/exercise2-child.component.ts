import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercise2-child',
  templateUrl: './exercise2-child.component.html',
  styles: ``,
})
export class Exercise2ChildComponent {
  @Input()
  public childMessage: string = '';

  @Output()
  public onChildMessage: EventEmitter<string> = new EventEmitter();

  emitChildMessage(): void {
    this.onChildMessage.emit('');
  }
}
