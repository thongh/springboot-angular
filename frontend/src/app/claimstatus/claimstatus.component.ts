import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claimstatus',
  templateUrl: './claimstatus.component.html',
  styleUrls: ['./claimstatus.component.css']
})
export class ClaimstatusComponent implements OnInit {

  alternate = false;
  toggle = true;
  color = true;
  size = 40;

  milestones = [
    {
      header: 'Notification',
      date: 'content',
      status: 'In-progress'
    },
    {
      header: 'Assessment',
      date: 'n/a',
      status: 'Not started'
    },
    {
      header: 'Fulfillment',
      date: 'n/a',
      status: 'Not started'
    },
    {
      header: 'Closure',
      date: 'n/a',
      status: 'Not started'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addEntry() {
    this.milestones.push({
      header: 'header',
      date: 'n/a',
      status: 'Not started'
    });
  }

  removeEntry() {
    this.milestones.pop();
  }

}
