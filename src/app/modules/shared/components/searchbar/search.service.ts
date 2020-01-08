import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import {ProjectModel} from '../../../../models/project.model';
import { IProject, Project } from '../../../../models/Project/project';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({providedIn: 'root'})
export class SearchService {
  private searchResults: Project[] = [];

  constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService) {}

  /**
   * @author Jesse Minneboo
   * @param title name of projects
   */
  searchProjectsByTitle(title: string) {
    this.apiService.get({
      auth: true,
      endpoint: '/project/search',
      body: {
        params: new HttpParams()
          .set('searchString', title)
          .set('caseSensitive', 'false')
      }
    }).pipe(
      tap((data => console.log(data)))
    ).subscribe();
  }

  isSearchResultsEmpty(): boolean {
    return this.searchResults.length < 1;
  }

  getSearchResults(): Project[] {
    return this.searchResults;
  }

  setSearchResults(searchResults: IProject[]) {
    searchResults.forEach((project: IProject) => {
      this.searchResults.push(
        new Project(project)
      );
    });
  }
}
