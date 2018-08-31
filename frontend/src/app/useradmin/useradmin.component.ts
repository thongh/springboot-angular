import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from  './my.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit  {

  characters: Observable<any[]>;
  columns: string[];
    
  constructor(private atService: MyService) {}
    
  ngOnInit() {
      this.columns = this.atService.getColumns(); 
      //["name", "age", "species", "occupation"]
      this.characters = this.atService.getCharacters();
      //all data in mock-data.ts
  }  
    
    
  

}
