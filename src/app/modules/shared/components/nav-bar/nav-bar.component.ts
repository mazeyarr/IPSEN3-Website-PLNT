import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../../../auth/components/login/login.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {AuthService} from '../../../auth/services/auth.service';
import {RegisterComponent} from '../../../auth/components/register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loginModalRef: MDBModalRef;
  registerModalRef: MDBModalRef;

  constructor(private modalService: MDBModalService, private authService: AuthService, private router: Router) {
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
    this.authService.checkAndSetAdmin();
    this.authService.setAuthToken('');
    this.authService.removeToken();

    this.router.navigate(['']);
  }
}
