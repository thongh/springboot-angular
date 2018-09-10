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
import { SelectionModel } from '@angular/cdk/collections';
import { ViewclaimmodalComponent } from '../viewclaimmodal/viewclaimmodal.component';
import { CamInstanceResponse } from '../models/caminstanceres.model';

interface CheckClaimResponse {
  id: string;
  definitionId: string;
  businessKey: string;
}

interface SelectedClaim {
  id: string;
  definitionId: string;
}

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
  userInstances: CheckClaimResponse[];
  userInstanceDisplayCols = ['id', 'definitionId', 'select'];
  userClaimsDataSource;
  selectedUserClaim;
  allowMultiSelect = false;

  constructor(
    private loginService: LoginService,
    private dataService: DataService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.selectedUserClaim = new SelectionModel<SelectedClaim>(this.allowMultiSelect, []);
    this.userInstances = new Array<CheckClaimResponse>();
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
    // Get claims of logged in user
    this.dataService.checkClaim().subscribe(
      instances => {
        console.log('all claims');
        console.log(instances);
        for (const instance of instances) {
          if (instance.definitionId.indexOf('FirstDemo:2') >= 0) {
            this.userInstances.push(instance);
          }
        }
        console.log('logged in user claims');
        console.log(this.userInstances);
        if (this.userInstances.length > 0) {
          this.haveActiveClaim = true;
        }
        this.userClaimsDataSource = new MatTableDataSource(this.userInstances);
    });
  }

  openDialog(policies): void {
    const dialogRef = this.dialog.open(NewclaimmodalComponent, {
      width: '80%',
      data: {policies: policies}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.dataService.checkClaim().subscribe(
        instances => {
            console.log('all claims');
            console.log(instances);
            this.userInstances = new Array();
            for (const instance of instances) {
                if ( instance.definitionId.indexOf('FirstDemo:2') >= 0) {
                    this.userInstances.push(instance);
                }
            }
            console.log('logged in user claims');
            console.log(this.userInstances);
            if (this.userInstances.length > 0) {
                this.haveActiveClaim = true;
            }
            this.userClaimsDataSource = new MatTableDataSource(this.userInstances);
        });
    });
  }

  openViewClaimDialog(accidentalClaim): void {
    const dialogRef = this.dialog.open(ViewclaimmodalComponent, {
      width: '80%',
      data: {claim: accidentalClaim}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The view claim dialog was closed');
    });
  }

}
