import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = 'test@gmail.com';
  password = 'Test';

  constructor() { }

  ngOnInit() {
  }
  tryLogin() {
    console.log('inside trylogin');


}
}
