import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

  authenticated = false;

  private userSource = new BehaviorSubject<User>(new User());
  currentUser = this.userSource.asObservable();
    
  constructor(
    private http: HttpClient) { }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }

  getUser(username): Observable<User> {
    return this.http.get<User>('http://localhost:8090/user?username=' + username);
  }
  
  setCurrentUser(user: User) {
    this.userSource.next(user);
  }
}
