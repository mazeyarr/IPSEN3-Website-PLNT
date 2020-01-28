import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/services/api/api.service';
import {IProject, Project} from '../../../models/Project/project';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IProjectSimple, ProjectSimple} from '../../../models/Project/project.simple';

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
      tap(data => console.log(data)),
      map((projects: IProjectSimple[]) => projects
        .slice(0, amount)
        .map((project: IProjectSimple) => new ProjectSimple(project))
        .sort(((a: ProjectSimple, b: ProjectSimple) => b.hasLikes.LIKE - a.hasLikes.LIKE))
      )
    );
  }

  getExcellentProjects(): Observable<Project[]> {
    return this.api.get({
      auth: false,
      endpoint: `${this.PREFIX}/excellent`
    }).pipe(
      map((projects: IProject[]) => projects.map(
        (project: IProject) => new Project(project)
      ))
    );
  }
}
