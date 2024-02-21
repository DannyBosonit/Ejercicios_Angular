import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  UrlSegment,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({ providedIn: 'root' })
export class VipGuard implements CanMatch, CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  private checkVipStatus(): boolean | Observable<boolean> {
    return this.usersService.checkVip().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) this.router.navigate(['/']);
      })
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    // console.log('Can Match');
    // console.log({ route, segments });

    return this.checkVipStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    // console.log('Can Activate');
    // console.log({ route, state });

    return this.checkVipStatus();
  }
}
