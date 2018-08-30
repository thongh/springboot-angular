import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-claimsearch',
  templateUrl: './claimsearch.component.html',
  styleUrls: ['./claimsearch.component.css'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class ClaimsearchComponent {

  myControl = new FormControl();
  claims = [
    {value: '123456789', viewValue: '#123456789'},
    {value: '123456788', viewValue: '#123456789'},
    {value: '123456787', viewValue: '#123456789'}
  ];

}
