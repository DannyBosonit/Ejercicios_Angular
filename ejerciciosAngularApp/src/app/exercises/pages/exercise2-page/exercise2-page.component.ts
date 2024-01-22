import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-exercise2-page',
  templateUrl: './exercise2-page.component.html',
  styles: ``,
})
export class Exercise2PageComponent implements OnInit {
  public parentMessage: string = '';
  public parentMessage2: string = '';
  public childServiceMessage: string = '';

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesService.sendChildMessage.subscribe((str: string) => {
      this.childServiceMessage = str;
    });
  }
  sendMessageService() {
    const message = 'PARENT USING SERVICE';
    this.messagesService.parentMessageToChild(message);
  }

  sendMessageToChild(): void {
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }

  onReciveMessage() {
    this.parentMessage2 = 'CHILD USING OUTPUT EVENT';
  }
}
