import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie, MovieList } from '../interfaces/movieList.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl: string = environments.baseUrl;
  private apiKey: string = environments.apiKey;
  private language: string = 'es-ES';

  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.language);

    return this.http
      .get<MovieList>(`${this.baseUrl}/movie/now_playing`, { params })
      .pipe(map((resp) => resp.results));
  }
}
