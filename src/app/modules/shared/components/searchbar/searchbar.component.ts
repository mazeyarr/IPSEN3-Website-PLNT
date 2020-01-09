import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from './data.service';
import {Router} from '@angular/router';
import { SearchService } from './search.service';
import { Project } from '../../../../models/Project/project';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})

/**
 * @author Jesse Minneboo
 */
export class SearchbarComponent implements OnInit {
  searchString: string;

  constructor(private searchService: SearchService, private router: Router) {
    this.searchString = '';
  }

  ngOnInit() {
  }

  private doSearch(searchString: string) {
    this.searchService.searchProjectsByTitle(searchString)
      .subscribe((projects: Project[]) => {
        this.searchService.setSearchResults(projects);
        this.router.navigateByUrl('/projects');
      });
  }

  private btnSearchOnClick() {
    this.doSearch(this.searchString);
  }

  private searchBarOnEnter() {
    this.doSearch(this.searchString);
  }

}
