import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../../app.route-animations';
import { ProjectService } from '../../../project/services/project.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Project } from '../../../../models/Project/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ slideInAnimation ]
})
export class HomeComponent implements OnInit {
  excellentProjects: Project[] = [];
  constructor(private authService: AuthService, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getExcellentProjectsLimit(4).subscribe(
      (projects: Project[]) => this.excellentProjects = projects
    );
  }

  isExcellentProjectsEmpty = (): boolean => this.excellentProjects.length < 1;

}
