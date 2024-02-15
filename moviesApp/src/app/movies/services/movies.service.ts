import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { Movie, MovieList } from '../interfaces/movieList.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl: string = environments.baseUrl;
  private apiKey: string = environments.apiKey;
  private language: string = 'es-ES';
  private moviesPage: number = 1;
  private loading: boolean = false;

  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.language)
      .set('page', this.moviesPage.toString());

    return this.http
      .get<MovieList>(`${this.baseUrl}/movie/now_playing`, { params })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.moviesPage += 1;
          this.loading = false;
        })
      );
  }

  resetMovieListPage() {
    this.moviesPage = 1;
  }
}
