import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs';
import {IProject, Project} from '../../../../models/Project/project';
import {HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProjectSimple, ProjectSimple } from '../../../../models/Project/project.simple';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private obvProjectSearchResults: Observable<ProjectSimple[]>;
  private searchQuery: string;
  private readonly PREFIX = '/project';

  constructor(private api: ApiService) {
  }

  getProjectByTag(tagString: string): Observable<ProjectSimple[]> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/search/tag`,
      body: {
        params: new HttpParams()
          .set('tagString', tagString)
      }
    }).pipe(
      map(
        (projects: IProjectSimple[]) => projects.map((project: IProjectSimple) => new ProjectSimple(project))
      ));
  }

  getSearchResults(): Observable<ProjectSimple[]> {
    return this.obvProjectSearchResults;
  }

  setSearchResults(projects: Observable<ProjectSimple[]>): void {
    this.obvProjectSearchResults = projects;
  }

  getSearchQuery() {
    return this.searchQuery;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }
}
