import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {IProject, Project} from '../../../../models/Project/project';
import {ApiService} from '../../services/api/api.service';
import {AuthService} from '../../../auth/services/auth.service';
import {Observable} from 'rxjs';
import { IProjectSimple, ProjectSimple } from '../../../../models/Project/project.simple';

@Injectable({providedIn: 'root'})
export class SearchBarService {
  private obvProjectSearchResults: Observable<ProjectSimple[]>;
  private searchQuery: string;

  constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService) {
  }

  searchProjectsByTitle(title: string, isCaseSensitive: boolean = false): Observable<ProjectSimple[]> {
    return this.apiService.get({
      auth: true,
      endpoint: '/project/search',
      body: {
        params: new HttpParams()
          .set('searchString', title)
          .set('caseSensitive', String(isCaseSensitive))
      }
    }).pipe(
      map(
        (projects: IProjectSimple[]) => projects.map((project: IProjectSimple) => new ProjectSimple(project))
      )
    );
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
