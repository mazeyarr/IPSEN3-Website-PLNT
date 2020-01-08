import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  HostListener,
  AfterViewInit,
  Injectable,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {DataService} from '../../../shared/components/searchbar/data.service';
import {SearchService} from '../../../shared/components/searchbar/search.service';
import {ProjectModel} from '../../../../models/project.model';
import { IProject, Project } from '../../../../models/Project/project';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  tableHeaders = Project.tableHeadProperties();
  projects = this.searchService.getSearchResults();

  constructor(private cdRef: ChangeDetectorRef, private data: DataService, private searchService: SearchService) { }

  ngOnInit() {
    this.mdbTable.setDataSource(this.projects);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }


}
