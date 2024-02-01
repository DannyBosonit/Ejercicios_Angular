import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise2-child',
  templateUrl: './exercise2-child.component.html',
  styles: ``,
})
export class Exercise2ChildComponent implements OnInit {
  @Input()
  public parentMessage: string = '';

  @Output()
  public onChildMessage: EventEmitter<string> = new EventEmitter();

  private subscription?: Subscription;

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.sendParentMessage.subscribe((str: string) => {
      this.parentMessage = str;
    });
    this.subscription = this.messagesService
      .getParentObservable()
      .subscribe((str: string) => {
        this.parentMessage = str;
      });
  }

  sendMessageService() {
    const message = 'CHILD USING SERVICE';
    this.messagesService.childMessageToParent(message);
  }

  sendMessageSubject() {
    const message = 'CHILD USING SUBJECT';
    this.messagesService.setChildMessage(message);
  }

  emitChildMessage(): void {
    this.onChildMessage.emit('');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
