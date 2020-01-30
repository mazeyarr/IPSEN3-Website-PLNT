import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.css']
})
export class ModalConfirmDeleteComponent implements OnInit {
  constructor(public confirmDeleteModelRef: MDBModalRef,
              private router: Router,
              private projectService: ProjectService) {
  }

  ngOnInit() {
  }

  confirm() {
    this.projectService.deleteProjectBy(
      this.projectService.getEditingProject().id
    ).subscribe(
      () => {
        this.confirmDeleteModelRef.hide();
        this.router.navigate(['projects']);
      }
    );
  }
}
