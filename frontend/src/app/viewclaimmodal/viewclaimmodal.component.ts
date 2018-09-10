import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AccidentalClaim } from '../models/accidentalclaim.model';

export interface ViewClaimModalData {
  claim: AccidentalClaim;
}

@Component({
  selector: 'app-viewclaimmodal',
  templateUrl: './viewclaimmodal.component.html',
  styleUrls: ['./viewclaimmodal.component.css']
})
export class ViewclaimmodalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewclaimmodalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: ViewClaimModalData
  ) { }

  ngOnInit() {
    // Modal data
    console.log('view claim dialog data');
    console.log(this.data);
  }

}
