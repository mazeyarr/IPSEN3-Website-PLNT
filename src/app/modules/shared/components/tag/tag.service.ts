import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs';
import {IProject, Project} from '../../../../models/Project/project';
import {HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private obvProjectSearchResults: Observable<Project[]>;
  private readonly PREFIX = '/project';

  constructor(private api: ApiService) {
  }

  getProjectByTag(tagString: string): Observable<Project[]> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/search/tag`,
      body: {
        params: new HttpParams()
          .set('tagString', tagString)
      }
    }).pipe(
      map(
        (projects: IProject[]) => projects.map((project: IProject) => new Project(project))
      ));
  }

  getSearchResults(): Observable<Project[]> {
    return this.obvProjectSearchResults;
  }

  setSearchResults(projects: Observable<Project[]>): void {
    this.obvProjectSearchResults = projects;
  }
}
