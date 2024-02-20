import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public userForm: FormGroup = this.fb.group({
    id: [0],
    real_name: ['', Validators.required],
    user_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required],
    user_vip: [false, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  get currentUser(): User {
    const user = this.userForm.value as User;

    return user;
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    this.usersService.addUser(this.currentUser).subscribe((user) => {
      this.router.navigate(['auth/login']);
      this.snackBar.open(
        `Se ha creado el usuario ${user.user_name}!`,
        'cerrar',
        { duration: 3000 }
      );
    });
    this.userForm.reset();
    return;
  }
}
