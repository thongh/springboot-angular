import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user.model';
import { Policy } from '../models/policy.model';
import { Customer } from '../models/customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  private customerPolicySource = new BehaviorSubject<Policy[]>(new Array<Policy>());
  currentCustomerPolicy = this.customerPolicySource.asObservable();

  constructor(
    private http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getUser(username): Observable<User> {
    return this.http.get<User>('http://localhost:8090/user?username=' + username);
  }

  getCustomerPolicies(customerId): Observable<Policy[]> {
    return this.http.get<Policy[]>('http://localhost:8090/policiesOfCustomer?customerId=' + customerId);
  }

  getCustomer(email): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8090/customer?email=' + email);
  }

  setCurrentCustomerPolicy(policies: Policy[]) {
    this.customerPolicySource.next(policies);
  }

}
