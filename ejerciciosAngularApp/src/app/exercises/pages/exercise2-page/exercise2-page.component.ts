import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise2-page',
  templateUrl: './exercise2-page.component.html',
  styles: ``,
})
export class Exercise2PageComponent implements OnInit {
  public parentMessage: string = '';
  public childMessage: string = '';
  private subscription?: Subscription;

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.sendChildMessage.subscribe((str: string) => {
      this.childMessage = str;
    });
    this.subscription = this.messagesService
      .getChildObservable()
      .subscribe((str: string) => {
        this.childMessage = str;
      });
  }

  sendMessageService() {
    const message = 'PARENT USING SERVICE';
    this.messagesService.parentMessageToChild(message);
  }

  sendMessageSubject() {
    const message = 'Parent USING SUBJECT';
    this.messagesService.setParentMessage(message);
  }

  sendMessageToChild(): void {
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }

  onReciveMessage() {
    this.childMessage = 'CHILD USING OUTPUT EVENT';
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
