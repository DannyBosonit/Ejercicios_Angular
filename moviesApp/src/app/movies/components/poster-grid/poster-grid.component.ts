import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movieList.interface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-poster-grid',
  templateUrl: './poster-grid.component.html',
  styleUrl: './poster-grid.component.css',
})
export class PosterGridComponent implements OnInit {
  @Input()
  movies?: Movie[];

  constructor(starRating: NgbRatingConfig, private router: Router) {
    starRating.max = 10;
    starRating.readonly = true;
  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  onMoviePage(movie: Movie) {
    this.router.navigate(['/movies/movie', movie.id]);
  }
}
