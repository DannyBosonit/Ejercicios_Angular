import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public sendChildMessage: EventEmitter<string> = new EventEmitter<string>();
  public sendParentMessage: EventEmitter<string> = new EventEmitter<string>();
  private childSubject: Subject<string> = new Subject<string>();
  private parentSubject: Subject<string> = new Subject<string>();

  constructor() {}

  childMessageToParent(message: string): void {
    this.sendChildMessage.emit(message);
  }

  parentMessageToChild(message: string): void {
    this.sendParentMessage.emit(message);
  }

  getChildObservable() {
    return this.childSubject.asObservable();
  }

  setChildMessage(message: string) {
    this.childSubject.next(message);
  }

  getParentObservable() {
    return this.parentSubject.asObservable();
  }

  setParentMessage(message: string) {
    this.parentSubject.next(message);
  }
}
