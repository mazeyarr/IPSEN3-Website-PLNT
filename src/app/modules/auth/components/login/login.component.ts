import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validatingForm: FormGroup;

  constructor(public loginModalRef: MDBModalRef) {}


  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  login(): void {
    if (this.loginFormModalEmail.valid && this.loginFormModalPassword.valid) {
      // TODO: if is valid input then send to backend for further validation and login
      console.log('VALID CREDENTIALS');
    } else {
      console.log('INVALID CREDENTIALS');
    }

  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

}
