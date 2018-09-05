import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();
    
  constructor(
    private http: HttpClient) { }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getUser(username): Observable<User> {
    return this.http.get<User>('http://localhost:8090/user?username=' + username);
  }
}
