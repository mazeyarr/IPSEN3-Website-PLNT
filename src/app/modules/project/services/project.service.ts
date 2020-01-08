import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly PREFIX = '/project';

  constructor(private api: ApiService) { }
}
