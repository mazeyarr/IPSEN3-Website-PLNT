import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../../app.route-animations';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ApiService } from '../../services/api/api.service';
import { ProjectService } from '../../../project/services/project.service';
import { Observable } from 'rxjs';
import { Project } from '../../../../models/Project/project';
import { filter, take } from 'rxjs/operators';
import { ProjectTypes } from '../../../project/types/project-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ slideInAnimation ]
})
export class HomeComponent implements OnInit {
  private static readonly MAX_PROJECTS_TO_SHOW = 4;
  private projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjectsAll().pipe(
      filter((projects: Project[], index: number) => projects[index].catagory === ProjectTypes.EXCELLENT),
      take(HomeComponent.MAX_PROJECTS_TO_SHOW)
    );
  }

  ngOnInit(): void {
  }

}
