import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import {ProjectModel} from '../../../../models/project.model';
import { IProject, Project } from '../../../../models/Project/project';
import { AuthService } from '../../../auth/services/auth.service';
import { Observable } from 'rxjs';
import {ApiService} from '../../../shared/services/api/api.service';

@Injectable({providedIn: 'root'})
export class LikeService {
  private likeResult: Project[] = [];

  constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService) {}

  likeProjectById(id: number): Observable<Project[]> {
    return this.apiService.put({
      auth: true,
      endpoint: '/project/like',
      body: {
        params: new HttpParams()
          .set('project_id', String(id))
      }
    }).pipe(
      map(
        (projects: IProject[]) => projects.map((project: IProject) => new Project(project))
      )
    );
  }

  setLikeResults(projects: Project[]): void {
    this.likeResult = projects;
  }
}
