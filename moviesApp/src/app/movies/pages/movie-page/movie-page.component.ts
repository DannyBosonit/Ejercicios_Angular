import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDatails } from '../../interfaces/movie.interface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Cast } from '../../interfaces/movieCredits.interface';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
})
export class MoviePageComponent implements OnInit {
  public movie?: MovieDatails;
  public cast: Cast[] = [];

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private config: NgbRatingConfig
  ) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.moviesService.getMoviesDetails(id).subscribe((movie) => {
      if (!movie) {
        this.router.navigate(['/movies/list']);
        return;
      }

      this.movie = movie;
    });

    this.moviesService.getCast(id).subscribe((cast) => {
      this.cast = cast;
    });
  }
}
