import { Component, OnInit, Input, Inject } from '@angular/core';
import { LoginService } from '../login/login.service';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';
import { Customer } from '../models/customer.model';
import { Policy } from '../models/policy.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewclaimmodalComponent } from '../newclaimmodal/newclaimmodal.component';

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
  customer: Customer;
  policies: Policy[];
  policiesDataSource;
  displayedColumns = ['policyId', 'fundValue', 'policyTerm', 'assetId'];
  animal: string;
  name: string;

  constructor(
    private loginService: LoginService,
    private dataService: DataService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    // Get user name from URL
    this.username = this.route.snapshot.params.username;
    // Get logged in user details
    this.dataService.getUser(this.username).subscribe({
      next: user => this.user = user,
      error(msg) { console.log('Error Getting user: ', msg); },
      complete: () => {
        this.dataService.getCustomer(this.username).subscribe({
          next: customer => this.customer = customer,
          error(msg) { console.log('Error Getting customer: ', msg); },
          complete: () => {
            this.dataService.getCustomerPolicies(this.customer.customerId).subscribe({
              next: policies => this.policies = policies,
              error(msg) { console.log('Error Getting customer policies: ', msg); },
              complete: () => {
                console.log('Policies: ');
                console.log(this.policies);
                this.policiesDataSource = new MatTableDataSource(this.policies);
                this.dataService.setCurrentCustomerPolicy(this.policies);
              }
            });
          }
        });
      }
    });
  }

  openDialog(policies): void {
    const dialogRef = this.dialog.open(NewclaimmodalComponent, {
      width: '60%',
      data: {policies: policies}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
