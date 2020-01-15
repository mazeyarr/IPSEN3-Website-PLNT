import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { IProject, Project } from '../../../models/Project/project';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly PREFIX = '/project';

  constructor(private api: ApiService) { }

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

  likeProjectById(id: number): Observable<Project> {
    return this.api.put({
      auth: true,
      endpoint: `${this.PREFIX}/like/${id}`
    }).pipe(
      map((project: IProject) => new Project(project))
    );
  }
}
