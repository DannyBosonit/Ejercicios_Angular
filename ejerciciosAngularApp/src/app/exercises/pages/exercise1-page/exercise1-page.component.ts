import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1-page',
  templateUrl: './exercise1-page.component.html',
  styles: ``,
})
export class Exercise1PageComponent {
  public showImg: boolean = false;

  toggleImage(): void {
    this.showImg = !this.showImg;
  }
}
