import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../../auth/components/login/login.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loginModalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit() {
  }

  openLoginModal() {
    this.loginModalRef = this.modalService.show(LoginComponent);
  }

}
