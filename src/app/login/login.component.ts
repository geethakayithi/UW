import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = 'test@gmail.com';
  password = 'Test';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  tryLogin() {
    console.log('inside trylogin');
    this.router.navigateByUrl('/home');

}
}
