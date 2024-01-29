import { Component, OnInit } from '@angular/core';
import { Country, User } from '../../interfaces/exercise3.interface';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise3-form',
  templateUrl: './exercise3-form.component.html',
  styleUrl: './exercise3-form.component.css',
})
export class Exercise3FormComponent implements OnInit {
  public countries: Country[] = [];
  public users: User[] = [];
  public userForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    email: new FormControl(''),
    subscription: new FormControl(false),
    country: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  get currentUser(): User {
    const user = this.userForm.value as User;
    return user;
  }

  onSubmit(): void {
    if (!this.currentUser.id) {
      this.usersService.addUser(this.currentUser).subscribe((user) => {
        console.log(user);
        this.usersService.getUsers().subscribe((users) => (this.users = users));
        this.userForm.reset();
      });
      return;
    }
  }
}
