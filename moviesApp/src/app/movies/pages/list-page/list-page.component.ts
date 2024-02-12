import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent {
  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies().subscribe((resp) => {
      console.log(resp);
    });
  }
}
