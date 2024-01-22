import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-exercise2-child',
  templateUrl: './exercise2-child.component.html',
  styles: ``,
})
export class Exercise2ChildComponent implements OnInit {
  @Input()
  public childMessage: string = '';

  @Output()
  public onChildMessage: EventEmitter<string> = new EventEmitter();

  public parentServiceMessage: string = '';

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.sendParentMessage.subscribe((str: string) => {
      this.parentServiceMessage = str;
    });
  }

  sendMessageService() {
    const message = 'CHILD USING SERVICE';
    this.messagesService.childMessageToParent(message);
  }

  emitChildMessage(): void {
    this.onChildMessage.emit('');
  }
}
