import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  get currentUser(): User {
    const user = this.loginForm.value as User;

    return user;
  }

  onLogin(): void {
    this.usersServive
      .login(this.currentUser.user_name, this.currentUser.password)
      .subscribe((user) => {
        this.router.navigate(['movies/list']);
      });
  }
}
