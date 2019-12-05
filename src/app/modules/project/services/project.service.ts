import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { IProject, Project } from '../../../models/Project/project';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly PREFIX = '/project';

  constructor(private api: ApiService) { }

  public getProjectsAll(): Observable<IProject[]> {
    return this.api.get({ endpoint: this.PREFIX + '/all', auth: false, body: {} });
  }

  // public getProjectById(): Project {
  //   return new Project({ title: '' });
  // }

  public saveProjectById(): void {
    console.log('save call');
  }
}
