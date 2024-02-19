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
  public noResults?: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.txt = params['text'];
      this.moviesService.searchMovies(this.txt).subscribe((movies) => {
        if (movies.length > 0) {
          this.movies = movies;
          this.noResults = false;
        } else {
          this.noResults = true;
        }
      });
    });
  }

  onMoviePage(movie: Movie) {
    this.router.navigate(['/movies/movie', movie.id]);
  }
}
