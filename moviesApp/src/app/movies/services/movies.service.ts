import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieList } from '../interfaces/movieList.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getmovies(): Observable<MovieList> {
    return this.http.get<MovieList>();
  }
}
