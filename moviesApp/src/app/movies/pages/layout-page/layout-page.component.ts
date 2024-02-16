import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent {
  constructor(private router: Router) {}

  onMoviesListPage() {
    this.router.navigate(['/movies/list']);
  }

  searchMovie(txt: string) {
    txt = txt.trim();

    if (!txt) return;

    this.router.navigate(['movies/search', txt]);
  }
}
