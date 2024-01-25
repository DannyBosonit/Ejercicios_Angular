import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { University } from '../interfaces/exercise4.interface';

@Injectable({ providedIn: 'root' })
export class universitiesService {
  private dataBaseUrl: string = environments.dataBaseUrl;

  constructor(private http: HttpClient) {}

  getSuggestionsSpain(query: string): Observable<University[]> {
    return this.http.get<University[]>(
      `${this.dataBaseUrl}/universidades?q=${query}&country=Spain`
    );
  }

  getSuggestionsUK(query: string): Observable<University[]> {
    return this.http.get<University[]>(
      `${this.dataBaseUrl}/universidades?q=${query}&country=United Kingdom`
    );
  }

  getSuggestionsPortugal(query: string): Observable<University[]> {
    return this.http.get<University[]>(
      `${this.dataBaseUrl}/universidades?q=${query}&country=Portugal`
    );
  }
}
