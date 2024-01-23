import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/exercise3.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-exercise3-table',
  templateUrl: './exercise3-table.component.html',
  styleUrls: ['./exercise3-table.component.css'],
})
export class Exercise3TableComponent implements OnInit {
  public users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }
}
