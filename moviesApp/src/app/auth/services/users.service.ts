import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersDataBase: string = environments.userDataBaseUrl;
  private user?: User;

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.usersDataBase}/users`, user);
  }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;

    return structuredClone(this.user);
  }

  login(username: string, password: string): Observable<User> {
    const params = new HttpParams()
      .set('user_name', username)
      .set('password', password);

    return this.http.get<User>(`${this.usersDataBase}/users`, { params }).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem('token', user.id.toString())),
      tap((user) => localStorage.setItem('user_vip', user.user_vip.toString()))
    );
  }
}
