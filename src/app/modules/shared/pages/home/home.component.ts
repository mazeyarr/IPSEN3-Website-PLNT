import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../../app.route-animations';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ slideInAnimation ]
})
export class HomeComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(ModalComponent);
  }

  ngOnInit(): void {
  }

}
