import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../../../auth/services/auth.service';
import { ProjectService } from '../../services/project.service';
import { Observable } from 'rxjs';
import { Project } from '../../../../models/Project/project';
import { ProjectSimple } from '../../../../models/Project/project.simple';
import { MDBModalService } from 'angular-bootstrap-md';
import { ModalConfirmDeleteComponent } from '../../components/modal-confirm-delete/modal-confirm-delete.component';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit, OnDestroy {
  obvProject: Observable<Project>;
  project: Project = null;

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router,
              private authService: AuthService,
              private modalService: MDBModalService) {
    this.obvProject = new Observable<Project>();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;

      this.projectService.getProjectBy(this.id).subscribe(
        (project: Project) => {
          this.project = project;
          this.projectService.setEditingProject(project);
        }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.projectService.setEditingProject(null);
  }

  onProjectLike(projectId: number) {
    this.projectService.likeProjectById(projectId)
      .subscribe((project: Project) => {
        this.project.hasLikes.LIKE = project.hasLikes.LIKE;
        this.project.hasTotalLikes = project.hasTotalLikes;
      });
  }

  onViewProjectClick() {
    window.open(this.project.hasResource.resourceUrl, '_blank');
  }

  onEditProjectClick() {
    this.router.navigate(['edit-project', this.project.id]);
  }

  onDeleteClick() {
    this.modalService.show(ModalConfirmDeleteComponent);
  }
}
