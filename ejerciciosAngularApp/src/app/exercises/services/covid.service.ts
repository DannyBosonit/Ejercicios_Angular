import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { StateInfo } from '../interfaces/exercise6.interface';

@Injectable({ providedIn: 'root' })
export class CovidService {
  private covidUrl: string = environments.covidUrl;

  constructor(private http: HttpClient) {}

  getStatesCovisInfo(): Observable<StateInfo[]> {
    return this.http.get<StateInfo[]>(`${this.covidUrl}`);
  }
}
