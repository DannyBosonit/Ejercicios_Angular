import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/exercise3.interface';
import { UsersService } from '../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise3-form',
  templateUrl: './exercise3-form.component.html',
  styleUrl: './exercise3-form.component.css',
})
export class Exercise3FormComponent implements OnInit {
  public countries: Country[] = [];
  public userForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    email: new FormControl(''),
    subscription: new FormControl(false),
    country: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private usersSercice: UsersService) {}

  ngOnInit(): void {
    this.usersSercice
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  onSubmit(): void {
    console.log({
      formIsValid: this.userForm.valid,
      value: this.userForm.value,
    });
  }
}
