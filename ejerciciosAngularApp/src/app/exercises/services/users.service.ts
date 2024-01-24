import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country, User } from '../interfaces/exercise3.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private dataBaseUrl: string = environments.dataBaseUrl;
  private countriesUrl: string = environments.countriesUrl;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.countriesUrl}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.dataBaseUrl}/users`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.dataBaseUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User id is required.');
    return this.http.patch<User>(`${this.dataBaseUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<boolean> {
    return this.http.delete(`${this.dataBaseUrl}/users/${id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
