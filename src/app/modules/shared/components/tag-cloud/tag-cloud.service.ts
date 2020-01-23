import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs';
import {Tag, ITag} from '../../../../models/Tag/tag';
import {map} from 'rxjs/operators';
import {IProject, Project} from '../../../../models/Project/project';

@Injectable({
  providedIn: 'root'
})
export class TagCloudService {
  private readonly PREFIX = '/tag';

  constructor(private api: ApiService) {
  }

  getTagsLimit(amount: number): Observable<Tag[]> {
    return this.api.get({
      auth: false,
      endpoint: `${this.PREFIX}/all`
    }).pipe(
      map((tags: ITag[]) => tags
        .slice(0, amount)
        .map((tag: ITag) => new Tag(tag))
        .sort(((a: Tag, b: Tag) => b.amount - a.amount))
      )
    );
  }

  getTags(): Observable<Tag[]> {
    return this.api.get({
      auth: false,
      endpoint: `${this.PREFIX}/all`
    }).pipe(
      map((tags: ITag[]) => tags.map(
        (tag: ITag) => new Tag(tag)
      ))
    );
  }
}
