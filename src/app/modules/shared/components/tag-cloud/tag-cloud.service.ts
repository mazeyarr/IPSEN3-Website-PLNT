import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs';
import {Project} from '../../../../models/Project/project';
import {HttpParams} from '@angular/common/http';

export interface ITagCloud {
  [key: string]: number;
}

@Injectable({
  providedIn: 'root'
})
export class TagCloudService {
  private readonly PREFIX = '/tag';

  constructor(private api: ApiService) {
  }

  getTags(): Observable<ITagCloud> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/all`
    });
  }

  getTag(tagString: string): Observable<Project[]> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/search/tag`,
      body: {
        params: new HttpParams()
          .set('tagString', tagString)
      }
    });
  }

  // todo remove this
  // getTags(): Observable<Tag[]> {
  //   return this.api.get({
  //     auth: true,
  //     endpoint: `${this.PREFIX}/all`
  //   }).pipe(
  //     map((tags: ITag[]) => tags.map(
  //       (tag: ITag) => new Tag(tag)
  //     ))
  //   );
  // }
}
