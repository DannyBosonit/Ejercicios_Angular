import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
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

  login(username: string, password: string): Observable<User[]> {
    const params = new HttpParams()
      .set('user_name', username)
      .set('password', password);

    return this.http
      .get<User[]>(`${this.usersDataBase}/users`, { params })
      .pipe(
        tap((users) => {
          if (users && users.length > 0) {
            const user = users[0];

            if (user) {
              this.user = user;
              localStorage.setItem('token', JSON.stringify(user.id));
              localStorage.setItem('user_vip', JSON.stringify(user.user_vip));
            }
          }
        })
      );
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token');

    return this.http
      .get<User>(`${this.usersDataBase}/users/${this.user?.id}`)
      .pipe(
        tap((user) => (this.user = user)),
        map((user) => !!user),
        catchError((err) => of(false))
      );
  }

  checkVip(): Observable<boolean> {
    if (!localStorage.getItem('user_vip')) return of(false);

    const vip = localStorage.getItem('user_vip');

    return this.http
      .get<User>(`${this.usersDataBase}/users/${this.user?.id}`)
      .pipe(
        tap((user) => (this.user = user)),
        map((user) => !!user),
        catchError((err) => of(false))
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
