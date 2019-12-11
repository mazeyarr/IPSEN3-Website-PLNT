import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ProjectListComponent } from '../../../project/components/project-list/project-list.component';
import {DataService} from './data.service';

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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentSearchResult.subscribe(message => this.searchResult = message);
  }

  /**
   * @author Jesse Minneboo
   * pushes search result to project list componeent
   */
  private pushSearchResultToProjectComponent() {
    this.data.changeMessage(this.projectNameInput.nativeElement.value);
  }

}
