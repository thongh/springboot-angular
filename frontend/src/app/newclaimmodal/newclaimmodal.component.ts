import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../services/data.service';
import { Policy } from '../models/policy.model';
import { Asset } from '../models/asset.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// start camunda: http://localhost:8070/engine-rest/process-definition/FirstDemo:2:1ef490ee-b267-11e8-a6af-549a3431da33/start

export interface DialogData {
  policies: Array<Policy>;
}

export interface ClaimData {
  assetId: number;
  assetName: string;
  claimType: string;
  customerId: number;
  policyId: number;
}

@Component({
  selector: 'app-newclaimmodal',
  templateUrl: './newclaimmodal.component.html',
  styleUrls: ['./newclaimmodal.component.css'],
  providers: [DataService]
})
export class NewclaimmodalComponent implements OnInit {
  claimData: ClaimData;
  assetOptions = [];
  customerPolicies;
  asset: Asset;
  claimTypes = [
    {value: 'Accidental Damage', viewValue: 'Accidental Damage'},
    {value: 'Accidental Loss', viewValue: 'Accidental Loss'},
    {value: 'Theft', viewValue: 'Theft'},
    {value: 'Unemployment', viewValue: 'Unemployment'},
    {value: 'Disability', viewValue: 'Disability'},
    {value: 'Death', viewValue: 'Death'}
  ];

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    public dialogRef: MatDialogRef<NewclaimmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  ngOnInit() {
    // Initialize claim data
    this.claimData = {
        assetId: 0,
        assetName: 'n/a',
        claimType: 'n/a',
        customerId: 0,
        policyId: 0
    };
    // Populate assets combobox
    console.log('dialog data');
    console.log(this.data);
    if (!!this.data) {
      const policies = this.data.policies;
      for (const policy of policies) {
        const assetId = policy.assetId;
        let tempAsset: Asset;
        // Call rest to get asset details
        this.dataService.getAsset(assetId).subscribe({
          next: asset => tempAsset = asset,
          error(msg) { console.log('Error Getting asset: ', msg); },
          complete: () => {
            const assetOption = {value: '' + tempAsset.assetId, viewValue: '' + tempAsset.name};
            this.assetOptions.push(assetOption);
          }
        });

      }
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  assetComboOnChange(event): void {
    console.log('asset combo on change');
    console.log(event);
    for (const option of this.assetOptions) {
      if (option.value === event.value) {
        this.claimData.assetName = option.viewValue;
      }
    }
  }

  onSubmitClick() {
    this.dataService.submitClaim(this.claimData)
      .subscribe(res => {
        console.log('start claim process');
        console.log(res);
        this.dialogRef.close();
      });
  }

}
