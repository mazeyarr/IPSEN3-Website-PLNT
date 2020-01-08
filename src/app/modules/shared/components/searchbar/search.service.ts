import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ProjectModel} from '../../../../models/project.model';
import { IProject, Project } from '../../../../models/Project/project';

@Injectable({providedIn: 'root'})
export class SearchService {
  private searchResults: Project[] = [];

  constructor(private http: HttpClient) {}

  /**
   * @author Jesse Minneboo
   * @param title name of projects
   */
  searchProjectsByTitle(title: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('searchString', title);
    return this.http
      .get<{ [key: string]: ProjectModel }>(
        'http://localhost:9000/api/project/search',
        { params: searchParams }
        )
      .pipe(map(responseData => {
          const projectArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              projectArray.push({...responseData[key], id: key});
            }
          }
          console.log(projectArray);
          return projectArray;
        })
      );
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
