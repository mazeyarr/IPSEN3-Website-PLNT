import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validatingForm: FormGroup;

  constructor(public loginModalRef: MDBModalRef, private authService: AuthService) {}


  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  btnLoginClick = async (): Promise<void> => {
    if (this.loginFormModalEmail.valid && this.loginFormModalPassword.valid) {
      await this.authService.login(this.loginFormModalEmail.value, this.loginFormModalPassword.value);

      console.log(this.authService.getAuthUser());
      console.log(this.authService.isAuthenticated);

      if (this.authService.isAuthenticated) {
        this.loginModalRef.hide();
      } else {
        // TODO: show user that not right credentials
      }

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
