import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SearchComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder) { }

    searchForm: FormGroup;
    searchObj={};

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
   
  }
  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.searchForm.value.appid);
    this.searchObj= this.searchForm.value;
    console.log(this.searchObj['appid']);
   this.search();
}

}
