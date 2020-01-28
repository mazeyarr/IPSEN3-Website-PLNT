import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs';
import {Tag, ITag} from '../../../../models/Tag/tag';
import {map, tap} from 'rxjs/operators';

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

  getTagsLimit(amount: number): Observable<ITagCloud> {
    return this.api.get({
      auth: true,
      endpoint: `${this.PREFIX}/all`
    });
  }

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
