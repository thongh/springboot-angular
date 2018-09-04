import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './user-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  private usersUrl = '/allusers';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getMockUsers(): User[] {
    return USERS;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8090/allusers');
  }
}
