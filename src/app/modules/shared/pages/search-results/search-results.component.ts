import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../../../models/Project/project';
import {ProjectService} from '../../../project/services/project.service';
import {SearchBarService} from '../../components/searchbar/searchBar.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private searchQuery: string;

  constructor(private searchBarService: SearchBarService) {
  }

  ngOnInit() {
    this.searchQuery = this.searchBarService.getSearchQuery();
  }

}
