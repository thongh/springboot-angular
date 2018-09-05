import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-claimdashboard',
  templateUrl: './claimdashboard.component.html',
  styleUrls: ['./claimdashboard.component.css'],
  providers: [LoginService, DataService]
})
export class ClaimdashboardComponent implements OnInit {
  panelOpenState = false;
  haveActiveClaim = false;
  user: User;
  message: string;
  username: string;
    
  constructor(
    private loginService: LoginService,
    private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
//    this.user = this.loginService.getUserName();
//    this.loginService.currentUser.subscribe(user => this.user = user);
//    this.data.currentMessage.subscribe(message => this.message = message);

    this.username = this.route.snapshot.params.username;
    this.dataService.getUser(this.username).subscribe({
      next: user => this.user = user,
      error(msg) { console.log('Error Getting user: ', msg); },
      complete: () => {}
    });
  }

}
