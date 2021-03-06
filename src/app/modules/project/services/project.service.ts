import { Injectable} from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {IProject, Project} from '../../../models/Project/project';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IProjectSimple, ProjectSimple} from '../../../models/Project/project.simple';
import {Education, IEducation} from '../../../models/Education/education';
import {HttpParams} from '@angular/common/http';
import {ICreateProjectData} from '../components/create-project-data/create-project-data.component';
import {UploadTypes} from '../types/upload-types';
import {IResource, Resource} from '../../../models/Resource/resource';
import { LikeTypes } from '../components/like/types/like-types';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly PREFIX = '/project';

  private editingProject: Project = null;

  constructor(private api: ApiService) {
  }

  getEditingProject() {
    return this.editingProject;
  }

  setEditingProject(project: Project) {
    this.editingProject = project;
  }

  getProjectBy(id: number): Observable<Project> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/${id}`
    }).pipe(
      map((project: IProject) => new Project(project))
    );
  }

  getProjects(): Observable<ProjectSimple[]> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/all`
    }).pipe(
      map((projects: IProjectSimple[]) => projects.map(
        (project: IProjectSimple) => new ProjectSimple(project)
      ))
    );
  }

  likeProjectById(id: number): Observable<Project> {
    return this.api.put({
      auth: true,
      body: new HttpParams()
        .set('id', id.toString())
        .set('likeType', LikeTypes.LIKE),
      endpoint: `${this.PREFIX}/like`
    }).pipe(
      map((project: IProject) => new Project(project))
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

  createProjects(createProjectData: ICreateProjectData[]): Promise<Project[]> {
    const promises = [];

    createProjectData.forEach((projectData: ICreateProjectData) => {
      promises.push(
        new Promise<Project>(resolve => {
          this.api.post({
            auth: true,
            body: new HttpParams()
              .set('title', projectData.createProjectParams.title)
              .set('language', projectData.createProjectParams.language)
              .set('grade', projectData.createProjectParams.grade.toString())
              .set('educationId', projectData.createProjectParams.educationId.toString()),
            endpoint: this.PREFIX + '/create'
          }).pipe(
            map((project: IProject) => new Project(project)),
          ).subscribe(
            (project: Project) =>
              this.createProjectResource(project, projectData.file).then(
                (projectWithResource: Project) => {
                  this.tagProject(projectWithResource.id, projectData.createProjectParams.tags);
                  resolve(projectWithResource);
                })
          );
        })
      );
    });

    return Promise.all(promises);
  }

  createProjectResource(project: Project, resource: File): Promise<Project> {
    const formsData = new FormData();

    formsData.append('entityId', project.id.toString());
    formsData.append('uploadType', UploadTypes.PROJECT);
    formsData.append('resource', resource);

    return new Promise<Project>(resolve => {
      this.api.post({
        auth: true,
        body: formsData,
        endpoint: '/resource/upload'
      }).pipe(
        map((createdResource: IResource) => new Resource(createdResource))
      ).subscribe(
        (createdResource: Resource) => resolve(createdResource.project)
      );
    });
  }

  updateProject(updatedProject: Project): Observable<Project> {
    return this.api.put({
      auth: true,
      body: new HttpParams()
        .set('id', updatedProject.id.toString())
        .set('title', updatedProject.title)
        .set('language', updatedProject.language)
        .set('grade', updatedProject.grade.toString())
        .set('educationId', updatedProject.education.id.toString()),
      endpoint: this.PREFIX + `/update/${updatedProject.id}`
    }).pipe(
      map((project: IProject) => new Project(project))
    );
  }

  deleteProjectBy(id: number) {
    return this.api.delete({
      auth: true,
      endpoint: this.PREFIX + `/delete/${id}`
    });
  }

  tagProject(projectId: number, tags: string[]): void {
    tags.forEach(
      (tag: string) => this.api.put({
        auth: true,
        body: new HttpParams()
          .set('id', projectId.toString())
          .set('tag', tag),
        endpoint: this.PREFIX + `/tag/${projectId}`
      }).pipe(
        map((project: IProject) => new Project(project))
      ).subscribe()
    );
  }
}
