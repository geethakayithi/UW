import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UwService } from '../services/uw.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SearchComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder,
    private uwService: UwService) { }

  searchForm: FormGroup;
  searchObj = {};
  uwObject = {};

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      appid: ['', Validators.required],
      tin: [''],
      cin: [''],
      business: [''],
      fname: [''],
      lname: ['']
    });
  }
  search() {
    this.uwService.getUWdata(this.searchObj)
      .subscribe((data) => {
        this.uwObject = data;
        console.log(this.uwObject);

      });
  }
  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.searchForm.value.appid);
    this.searchObj = this.searchForm.value;
    console.log(this.searchObj['appid']);
    this.searchObj = {
      "Provenir":
      {
        "Request":
        {
          "ID": this.searchObj['appid'],
          "UserID": "43932172"
        }
      }
    };
    this.search();
  }
  onSelect() {
    this.dialogRef.close();
  }

}
