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


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  searchResult: string;
  listOfProjects: ProjectModel[] = [];
  listIsEmpty: boolean;

  constructor(private cdRef: ChangeDetectorRef, private data: DataService, private searchService: SearchService) { }
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  elements: any = [];
  previous: any = [];

  headElements = ['Titel', 'cijfer', 'Vak', 'Opleiding', 'Taal', 'Likes'];


  // projectList: Array<any> = [
  //     { id: 1, title: 'test project', grade: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
  // ];

  ngOnInit() {
    this.listIsEmpty = true;

    this.data.currentSearchResult.subscribe(message => {
      this.searchResult = message;

      this.searchService.fetchProjects(this.searchResult).subscribe(projects => {
        this.listOfProjects = projects;

        for (let project of projects) {
          this.elements.push({title: project.title, grade: project.grade, fieldOfStudy: project.education.title,
          study: project.education.institute.name, language: project.language});
        }
      });

      if (this.listOfProjects != null) {
        this.listIsEmpty = false;
      }
    });

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }


}
