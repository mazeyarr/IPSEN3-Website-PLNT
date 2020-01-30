import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../../../auth/components/login/login.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {AuthService} from '../../../auth/services/auth.service';
import {RegisterComponent} from '../../../auth/components/register/register.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loginModalRef: MDBModalRef;
  registerModalRef: MDBModalRef;

  constructor(private modalService: MDBModalService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  openLoginModal() {
    this.loginModalRef = this.modalService.show(LoginComponent);
  }

  openRegisterModal() {
    this.registerModalRef = this.modalService.show(RegisterComponent);
  }

  logout() {
    this.authService.setAuthUser(null);
    this.authService.setAuthenticated(false);
    this.authService.setAuthToken(null);
  }

  CONSOLELOG(input) {
    console.log(input);
  }
}
