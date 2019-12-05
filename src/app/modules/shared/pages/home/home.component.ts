import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../../app.route-animations';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ApiService } from '../../services/api/api.service';
import { ProjectService } from '../../../project/services/project.service';
import { Observable } from 'rxjs';
import { IProject, Project } from '../../../../models/Project/project';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ slideInAnimation ]
})
export class HomeComponent implements OnInit {
  private projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    projectService.getProjectsAll().subscribe((projects: IProject[]) => {
      projects.map((project: IProject) => {
        this.projects.push(new Project(project));
      });
    });
  }

  ngOnInit(): void {
  }

}
