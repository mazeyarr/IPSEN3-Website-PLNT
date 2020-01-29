import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {ApiService} from '../../../shared/services/api/api.service';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../../../models/Project/project';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  private obvProjects: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
    this.obvProjects = this.projectService.getProjects();
  }

  ngOnInit() {
  }

  // filterHasBeenChanged(event: string[]) {
  //   console.log(event);
  //   // TODO: check if filters are one
  //   // TODO: if filter array is empty just get all projects
  //   if ('filter is on') {
  //     this.obvProjects = this.projectService.getProjects().pipe(
  //       filter((projects: Project[]) => projects.filter(
  //         (project: Project) => project.language === event
  //       ))
  //     );
  //   } else {
  //     this.obvProjects = this.projectService.getProjects();
  //   }
  // }

}
