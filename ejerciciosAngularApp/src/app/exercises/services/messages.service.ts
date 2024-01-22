import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public sendChildMessage: EventEmitter<string> = new EventEmitter<string>();
  public sendParentMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  childMessageToParent(message: string): void {
    this.sendChildMessage.emit(message);
  }

  parentMessageToChild(message: string): void {
    this.sendParentMessage.emit(message);
  }
}
