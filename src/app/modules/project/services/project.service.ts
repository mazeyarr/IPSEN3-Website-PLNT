import { Injectable} from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {IProject, Project} from '../../../models/Project/project';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IProjectSimple, ProjectSimple} from '../../../models/Project/project.simple';
import {Education, IEducation} from '../../../models/Education/education';
import {HttpParams} from '@angular/common/http';
import {CreateProjectData} from '../components/create-project-data/create-project-data.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly PREFIX = '/project';

  constructor(private api: ApiService) {
  }

  getProjects(): Observable<Project[]> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/all`
    }).pipe(
      map((projects: IProject[]) => projects.map(
        (project: IProject) => new Project(project)
      ))
    );
  }

  getExcellentProjectsLimit(amount: number): Observable<ProjectSimple[]> {
    return this.api.get({
      auth: false,
      endpoint: `${this.PREFIX}/excellent`
    }).pipe(
      map((projects: IProjectSimple[]) => projects
        .slice(0, amount)
        .map((project: IProjectSimple) => new ProjectSimple(project))
        .sort(((a: ProjectSimple, b: ProjectSimple) => b.hasLikes.LIKE - a.hasLikes.LIKE))
      )
    );
  }

  getExcellentProjects(): Observable<ProjectSimple[]> {
    return this.api.get({
      auth: false,
      endpoint: `${this.PREFIX}/excellent`
    }).pipe(
      map((projects: IProjectSimple[]) => projects.map(
        (project: IProjectSimple) => new ProjectSimple(project)
      ))
    );
  }

  getEducationAll(): Observable<IEducation[]> {
    return this.api.get({
      auth: false, // TODO: set true
      endpoint: '/education/all'
    }).pipe(
      map((educations: IEducation[]) => educations.map(
        (education: IEducation) => new Education(education)
      ))
    );
  }

  createProjects(createProjectData: CreateProjectData[]) {
    const promises = [];

    createProjectData.forEach((projectData: CreateProjectData) => {
      promises.push(
        new Promise(resolve => {
          this.api.post({
            auth: true,
            body: new HttpParams()
              .set('title', projectData.createProjectParams.title)
              .set('language', projectData.createProjectParams.language)
              .set('grade', projectData.createProjectParams.grade.toString())
              .set('educationId', projectData.createProjectParams.educationId.toString()),
            endpoint: this.PREFIX + '/create'
          }).pipe(
            map((project: IProject) => new Project(project))
          ).subscribe((project: Project) => {

            resolve(project);
          });
        })
      );
    });

    return Promise.all(promises);
  }

  createProjectResource(project: Project, resource: File) {
    return;
  }
}
