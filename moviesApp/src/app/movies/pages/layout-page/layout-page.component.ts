import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
    'input { background-color: #8c8c8c; \
      padding: 0.5rem; \
      border: none; \
      border-radius: 5px; \
      color: white; \
      height: 20px}',
    'input::placeholder {color: #d1cece}',
  ],
})
export class LayoutPageComponent {}
