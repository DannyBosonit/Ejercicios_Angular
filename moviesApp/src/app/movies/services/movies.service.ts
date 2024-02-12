import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieList } from '../interfaces/movieList.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl: string = environments.baseUrl;
  private apiKey: string = '8a4c99f021e2ec4432ec5bda4abeac6c';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieList> {
    return this.http.get<MovieList>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}`
    );
  }
}
