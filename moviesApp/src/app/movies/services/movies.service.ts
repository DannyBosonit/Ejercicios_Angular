import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environments } from '../../../environments/environments';
import { Movie, MovieList } from '../interfaces/movieList.interface';
import { MovieDatails } from '../interfaces/movie.interface';
import { Cast, MovieCredits } from '../interfaces/movieCredits.interface';

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

  searchMovies(txt: string): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.language)
      .set('query', txt)
      .set('page', this.moviesPage.toString())
      .set('include_adult', false);

    return this.http
      .get<MovieList>(`${this.baseUrl}/search/movie`, { params })
      .pipe(map((resp) => resp.results));
  }

  getMoviesDetails(id: number) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.language);

    return this.http
      .get<MovieDatails>(`${this.baseUrl}/movie/${id}`, {
        params,
      })
      .pipe(catchError((err) => of(null)));
  }

  getCast(id: number): Observable<Cast[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.language);

    return this.http
      .get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits`, {
        params,
      })
      .pipe(
        map((resp) => resp.cast),
        catchError((err) => of([]))
      );
  }

  resetMovieListPage() {
    this.moviesPage = 1;
  }
}
