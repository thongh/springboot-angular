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
  mockusers: User[];
  users: User[];
  displayedColumns = ['id', 'firstName', 'lastName', 'email'];
  dataSource;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getMockUsers();
    this.getUsers();
  }

  getMockUsers(): void {
    this.mockusers = this.userService.getMockUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: x => this.users = x,
      error(msg) { console.log('Error Getting users: ', msg); },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.users);    
      }
    });
  }
}

// export interface Element {
//  position: number;
//  firstName: string;
//  lastName: string;
//  email: string;
// }
