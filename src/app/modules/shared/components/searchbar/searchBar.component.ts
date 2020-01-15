import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { SearchBarService } from './searchBar.service';
import { Project } from '../../../../models/Project/project';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.css'],
})

/**
 * @author Jesse Minneboo
 */
export class SearchBarComponent implements OnInit {
  searchString: string;

  constructor(private searchService: SearchBarService, private router: Router) {
    this.searchString = '';
  }

  ngOnInit() {
  }

  private doSearch(searchString: string) {
    this.searchService.setSearchResults(
      this.searchService.searchProjectsByTitle(searchString)
    );
    this.router.navigate(['search-results']);
  }

  private btnSearchOnClick() {
    this.doSearch(this.searchString);
  }

  private searchBarOnEnter() {
    this.doSearch(this.searchString);
  }
}
