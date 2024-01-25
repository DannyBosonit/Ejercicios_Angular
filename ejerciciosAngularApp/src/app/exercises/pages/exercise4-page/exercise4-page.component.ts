import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { University } from '../../interfaces/exercise4.interface';
import { universitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-exercise4-page',
  templateUrl: './exercise4-page.component.html',
  styleUrl: './exercise4-page.component.css',
})
export class Exercise4PageComponent {
  public activeButton: number | null = null;
  public searchQuery: string = '';
  public universities: University[] = [];
  public searchUniversityinput = new FormControl('');

  constructor(private universitiesService: universitiesService) {}

  changeStyleButton(buttonNumber: number): void {
    this.activeButton = buttonNumber;
    this.searchQuery = '';
  }

  searchInputChange(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  searchSpainUniversity() {
    const value: string = this.searchUniversityinput.value || '';
    this.universitiesService
      .getSuggestionsSpain(value)
      .subscribe((universities) => (this.universities = universities));
  }

  searchUKUniversity() {
    const value: string = this.searchUniversityinput.value || '';
    this.universitiesService
      .getSuggestionsUK(value)
      .subscribe((universities) => (this.universities = universities));
  }

  searchPortugalUniversity() {
    const value: string = this.searchUniversityinput.value || '';
    this.universitiesService
      .getSuggestionsPortugal(value)
      .subscribe((universities) => (this.universities = universities));
  }
}
