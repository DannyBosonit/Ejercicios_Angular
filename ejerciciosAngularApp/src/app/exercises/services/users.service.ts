import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/exercise3.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
}
