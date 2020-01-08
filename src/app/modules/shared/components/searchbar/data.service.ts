import {Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {

  private searchResultSource = new BehaviorSubject<string>('');
  currentSearchResult = this.searchResultSource.asObservable();


  constructor() {}

  changeMessage(message: string) {
    this.searchResultSource.next(message);
  }


}
