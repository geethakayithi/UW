import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
        
  }
  search(){
    const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.minWidth = '50%';
      dialogConfig.position = {
        'top': '5%',
        left: '25%'
    };

      this.dialog.open(SearchComponent, dialogConfig);
  }

}
