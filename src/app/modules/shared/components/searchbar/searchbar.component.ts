import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from './data.service';
import {Router} from '@angular/router';

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

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.currentSearchResult.subscribe(message => this.searchResult = message);
  }

  /**
   * @author Jesse Minneboo
   * pushes search result to project list component
   */
  private pushSearchResultToProjectComponent() {
    this.data.changeMessage(this.projectNameInput.nativeElement.value);
    this.router.navigateByUrl('/projects');
  }

}
