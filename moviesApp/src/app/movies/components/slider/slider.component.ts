import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movieList.interface';
import { Swiper } from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'movies-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input()
  movies?: Movie[];

  public mySwiper?: Swiper;
  public movieList: Movie[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  onSliderPrev() {
    this.mySwiper?.slidePrev();
  }

  onSliderNext() {
    this.mySwiper?.slideNext();
  }

  onMoviePage(movie: Movie) {
    this.router.navigate(['movies/movie', movie.id]);
  }
}
