import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

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

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  get currentUser(): User {
    const user = this.userForm.value as User;

    return user;
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    this.usersService.addUser(this.currentUser).subscribe((user) => {
      // TODO: snackbar
    });
    this.userForm.reset();
    return;
  }
}
