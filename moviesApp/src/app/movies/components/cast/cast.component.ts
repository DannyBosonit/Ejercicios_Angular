import { Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../interfaces/movieCredits.interface';

@Component({
  selector: 'movie-cast',
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.css',
})
export class CastComponent implements OnInit {
  @Input()
  public cast?: Cast[] = [];

  ngOnInit(): void {
    console.log(this.cast);
  }
}
