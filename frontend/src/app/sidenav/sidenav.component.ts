import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [DataService]
})
export class SidenavComponent implements OnInit {

  options: FormGroup;
  user: User;
  username: string;
    
  constructor(
    fb: FormBuilder,
    private dataService: DataService
    private route: ActivatedRoute) {
      this.options = fb.group({
        bottom: 0,
        fixed: true,
        top: 0
      });
    }
  
  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    this.dataService.getUser(this.username).subscribe({
      next: user => this.user = user,
      error(msg) { console.log('Error Getting user: ', msg); },
      complete: () => {}
    });
  }

}
