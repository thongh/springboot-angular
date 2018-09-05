import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from './login.service';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, DataService]
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  user: User;
  @Output() messageEvent = new EventEmitter<User>();
  message: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private dataService: DataService) { }

  ngOnInit() {
    this.loginService.currentUser.subscribe(user => this.user = user);
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  login(): void {
//    this.loginService.authenticate(this.credentials, () => {
//      this.router.navigate(['home']);
//    });
//    return false;

    this.loginService.getUser(this.credentials.username).subscribe({
      next: x => this.user = x,
      error(msg) { console.log('Error Getting user: ', msg); },
      complete: () => {
        if (this.credentials.username === this.user.username
          && this.credentials.password === this.user.password) {
            this.messageEvent.emit(this.user);
            this.loginService.setCurrentUser(this.user);
            this.dataService.changeMessage("Test");
            this.router.navigate(['/home', this.user.username]);
        } else {
          alert('wrong pass!');
        }
      }
    });
  }
}
