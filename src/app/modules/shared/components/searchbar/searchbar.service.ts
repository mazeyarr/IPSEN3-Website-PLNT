import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SearchbarService {

  constructor(private http: HttpClient) {}

  /**
   * @author Jesse Minneboo
   * @param projectName name of projects
   */
  fetchProjects(projectName: string) {
    return this.http
      .get('http://localhost:9000/api/project/search?searchResult=' + projectName)
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
