import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class VipGuard implements CanActivate {
  constructor(private router: Router, private snakbar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const vip = localStorage.getItem('user_vip');

    if (vip === 'true') {
      return true;
    } else {
      this.router.navigate(['/']);
      this.snakbar.open('Debes ser V.i.P. para acceder!', 'cerrar', {
        duration: 3000,
      });
      return false;
    }
  }
}
