import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validatingForm: FormGroup;


  constructor(public registerModalRef: MDBModalRef, private authService: AuthService) {
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      registerFormModalEmail: new FormControl('', [Validators.email, Validators.required]),
      registerFormModalPassword: new FormControl('', Validators.required),
      registerFormModalFirstname: new FormControl('', Validators.required),
      registerFormModalLastname: new FormControl('', Validators.required)
    });
  }

  btnRegisterClick = async (): Promise<void> => {
    if (
      this.registerFormModalEmail.valid &&
      this.registerFormModalPassword.valid &&
      this.registerFormModalFirstname.valid &&
      this.registerFormModalLastname.valid
    ) {
      await this.authService.register(
        this.registerFormModalEmail.value,
        this.registerFormModalPassword.value,
        this.registerFormModalFirstname.value,
        this.registerFormModalLastname.value
      );
      await this.authService.login(this.registerFormModalEmail.value, this.registerFormModalPassword.value);

      if (this.authService.isAuthenticated) {
        this.registerModalRef.hide();
      } else {
        console.log('SOMETHING WENT WRONG');
      }
    } else {
      console.log('INPUT INVALID');
    }
  };

  get registerFormModalEmail() {
    return this.validatingForm.get('registerFormModalEmail');
  }

  get registerFormModalPassword() {
    return this.validatingForm.get('registerFormModalPassword');
  }

  get registerFormModalFirstname() {
    return this.validatingForm.get('registerFormModalFirstname');
  }

  get registerFormModalLastname() {
    return this.validatingForm.get('registerFormModalLastname');
  }
}
