import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './user-mock';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
