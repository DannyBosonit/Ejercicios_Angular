import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class VipGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const vip = localStorage.getItem('user_vip');

    if (vip === 'true') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
