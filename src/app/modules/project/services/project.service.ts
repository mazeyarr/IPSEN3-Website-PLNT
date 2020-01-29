import { EventEmitter, Injectable, Output } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { IProject, Project } from '../../../models/Project/project';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { fromArray } from 'rxjs/internal/observable/fromArray';
import { IProjectSimple, ProjectSimple } from '../../../models/Project/project.simple';
import {Education, IEducation} from "../../../models/Education/education";

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
}
