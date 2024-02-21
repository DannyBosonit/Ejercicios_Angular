import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  public loginForm: FormGroup = this.fb.group({
    user_name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private usersServive: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  get currentUser(): User {
    const user = this.loginForm.value as User;

    return user;
  }

  onLogin(): void {
    this.usersServive
      .login(this.currentUser.user_name, this.currentUser.password)
      .subscribe((user) => {
        this.snackBar.open(`Bienvenido a MyMoviesApp.com!`, 'cerrar', {
          duration: 3000,
        });
        this.router.navigate(['movies/list']);
      });
  }
}
