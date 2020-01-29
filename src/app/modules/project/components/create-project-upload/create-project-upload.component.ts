import {Component, Input, OnInit} from '@angular/core';
import {ICreateProjectData} from '../create-project-data/create-project-data.component';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../../../models/Project/project';

export interface ICreatedProject {
  project: Project;
  projectData: ICreateProjectData;
}

@Component({
  selector: 'app-create-project-upload',
  templateUrl: './create-project-upload.component.html',
  styleUrls: ['./create-project-upload.component.css']
})
export class CreateProjectUploadComponent implements OnInit {
  @Input() createProjectData: ICreateProjectData[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.createProjects();
  }

  createProjects() {
    this.projectService.createProjects(this.createProjectData).then(
      (projects: Project[]) => {
        console.log(projects);
        console.log('done!');
      }
    );
  }

}
