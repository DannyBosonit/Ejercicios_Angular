import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movieList.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent implements OnInit {
  public txt: string = '';
  public movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.txt = params['text'];
      this.moviesService
        .searchMovies(this.txt)
        .subscribe((movies) => (this.movies = movies));
    });
  }

  onMoviePage(movie: Movie) {
    this.router.navigate(['/movies/movie', movie.id]);
  }
}
