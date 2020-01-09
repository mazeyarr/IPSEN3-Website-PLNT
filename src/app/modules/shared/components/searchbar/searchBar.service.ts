import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import {ProjectModel} from '../../../../models/project.model';
import { IProject, Project } from '../../../../models/Project/project';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchBarService {
  private searchResults: Project[] = [];

  constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService) {}

  searchProjectsByTitle(title: string, isCaseSensitive: boolean = false): Observable<Project[]> {
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
        (projects: IProject[]) => projects.map((project: IProject) => new Project(project))
      )
    );
  }

  getSearchResults(): Project[] {
    return this.searchResults;
  }

  setSearchResults(projects: Project[]): void {
    this.searchResults = projects;
  }
}
