import { EventEmitter, Injectable, Output } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { IProject, Project } from '../../../models/Project/project';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { fromArray } from 'rxjs/internal/observable/fromArray';

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

  getExcellentProjectsLimit(amount: number): Observable<Project[]> {
    return this.api.get({
      auth: false,
      endpoint: `${this.PREFIX}/excellent`
    }).pipe(
      map((projects: IProject[]) => projects
        .slice(0, amount)
        .map((project: IProject) => new Project(project))
        .sort(((a: Project, b: Project) => b.hasLikes.LIKE.length - a.hasLikes.LIKE.length))
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
