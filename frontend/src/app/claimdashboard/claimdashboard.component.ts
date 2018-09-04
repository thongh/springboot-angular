import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claimdashboard',
  templateUrl: './claimdashboard.component.html',
  styleUrls: ['./claimdashboard.component.css']
})
export class ClaimdashboardComponent implements OnInit {
  panelOpenState = false;
  haveActiveClaim = false;
    
  constructor() { }

  ngOnInit() {
  }

}
