import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { UserService } from './user.service';
import { User } from './user.model';

// const ELEMENT_DATA: Element[] = [
//  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
//  {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
//  {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
//  {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
//  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
//  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
//  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
//  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
//  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
// ];

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css'],
  providers: [UserService]
})
export class UseradminComponent implements OnInit {
  users: User[];
  displayedColumns = ['id', 'firstName', 'lastName', 'email'];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
    this.dataSource = new MatTableDataSource(this.users);
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}

// export interface Element {
//  position: number;
//  firstName: string;
//  lastName: string;
//  email: string;
// }
