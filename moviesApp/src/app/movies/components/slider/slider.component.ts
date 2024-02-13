import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movieList.interface';
import { Swiper } from 'swiper';

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

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }
}
