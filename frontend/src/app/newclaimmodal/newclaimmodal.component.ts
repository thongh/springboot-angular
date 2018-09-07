import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../services/data.service';
import { Policy } from '../models/policy.model';

export interface DialogData {
  policies: Array<Policy>;
}

@Component({
  selector: 'app-newclaimmodal',
  templateUrl: './newclaimmodal.component.html',
  styleUrls: ['./newclaimmodal.component.css'],
  providers: [DataService]
})
export class NewclaimmodalComponent implements OnInit {

  assets = [];
  customerPolicies;

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<NewclaimmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  ngOnInit() {
    // Populate assets combobox
    console.log('dialog data');
    console.log(this.data);
    if (!!this.data) {
      const policies = this.data.policies;
      for (const policy of policies) {
        const asset = {value: '' + policy.assetId, viewValue: '' + policy.assetId};
        this.assets.push(asset);
      }
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
