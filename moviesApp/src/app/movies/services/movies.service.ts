import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieList } from '../interfaces/movieList.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl: string = environments.baseUrl;
  private apiKey: string = environments.apiKey;

  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<MovieList> {
    return this.http.get<MovieList>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=es-ES`
    );
  }
}
