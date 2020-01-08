import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from './data.service';
import {Router} from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})

/**
 * @author Jesse Minneboo
 */
export class SearchbarComponent implements OnInit {
  @ViewChild('projectNameInput', {static: true}) projectNameInput: ElementRef; // search result
  searchResult: string;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    // this.searchService.currentSearchResult.subscribe(message => this.searchResult = message);
  }

  /**
   * @author Jesse Minneboo
   * pushes search result to project list component
   */
  private pushSearchResultToProjectComponent() {
    // this.searchService.changeMessage(this.projectNameInput.nativeElement.value);
    this.router.navigateByUrl('/projects');
  }

  private doSearch(searchString: string) {
    // TODO: call search service
    this.searchService.searchProjectsByTitle(searchString);
    // TODO: search service set search results
  }

  private btnSearchOnClick() {
    this.doSearch('');
  }

  private searchBarOnEnter() {
    this.doSearch('');
  }

}
