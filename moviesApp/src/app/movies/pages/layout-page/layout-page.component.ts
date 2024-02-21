import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../auth/services/users.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent {
  constructor(private router: Router, private UsersService: UsersService) {}

  get user(): User | undefined {
    return this.UsersService.currentUser;
  }

  onMoviesListPage() {
    this.router.navigate(['/movies/list']);
  }

  searchMovie(txt: string) {
    txt = txt.trim();

    if (!txt) return;

    this.router.navigate(['movies/search', txt]);
  }

  onLogout() {
    this.UsersService.logout();
    this.router.navigate(['auth/login']);
  }
}
