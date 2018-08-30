import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( data => { this.users = data; } );
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe( data => {
      this.users = this.users.filter( u => u !== user );
    });
  }

}
