import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../../auth/components/login/login.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loginModalRef: MDBModalRef;

  constructor(private modalService: MDBModalService, private authService: AuthService) { }

  ngOnInit() {
  }

  openLoginModal() {
    this.loginModalRef = this.modalService.show(LoginComponent);
  }
}
