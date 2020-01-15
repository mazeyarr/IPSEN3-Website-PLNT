import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import { ApiService } from '../../../shared/services/api/api.service';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../../../models/Project/project';
import { Observable } from 'rxjs';

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

}
