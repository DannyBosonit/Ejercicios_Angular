import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movieList.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit, OnDestroy {
  public movie: Movie[] = [];
  public movieSlides: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = document.documentElement.scrollTop * 1300;
    const max = document.documentElement.scrollHeight;

    if (pos > max) {
      this.moviesService.getMoviesList().subscribe((movies) => {
        this.movie.push(...movies);
      });
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesList().subscribe((movies) => {
      this.movieSlides = movies;
      this.movie = movies;
    });
  }

  ngOnDestroy(): void {
    this.moviesService.resetMovieListPage();
  }
}
