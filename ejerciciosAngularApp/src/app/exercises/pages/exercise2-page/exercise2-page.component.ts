import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise2-page',
  templateUrl: './exercise2-page.component.html',
  styles: ``,
})
export class Exercise2PageComponent {
  public parentMessage: string = '';
  public parentMessage2: string = '';

  sendMessageToChild(): void {
    this.parentMessage = 'PARENT USING INPUT PROPERTY';
  }

  onReciveMessage() {
    this.parentMessage2 = 'CHILD USING OUTPUT EVENT';
  }
}
