import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movieList.interface';

@Component({
  selector: 'movie-poster-grid',
  templateUrl: './poster-grid.component.html',
  styleUrl: './poster-grid.component.css',
})
export class PosterGridComponent {
  @Input()
  movies?: Movie[];
}
