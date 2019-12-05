import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ProjectModel} from '../../../../models/project.model';

@Injectable({providedIn: 'root'})
export class ProjectService {

  constructor(private http: HttpClient) {}

  /**
   * @author Jesse Minneboo
   * @param projectName name of projects
   */
  fetchProjects(projectName: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('searchResult', projectName);
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
          return projectArray;
        })
      );
  }
}
