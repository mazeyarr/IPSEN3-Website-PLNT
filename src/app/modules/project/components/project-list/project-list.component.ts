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

  constructor(private cdRef: ChangeDetectorRef, private data: DataService, private searchService: SearchService) { }
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  elements: any = [];
  previous: any = [];

  headElements = ['title', 'category', 'field of study', 'study', 'language', 'Likes'];


  // projectList: Array<any> = [
  //     { id: 1, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
  // ];

  ngOnInit() {
    this.data.currentSearchResult.subscribe(message => {
      this.searchResult = message;

      this.searchService.fetchProjects(this.searchResult).subscribe(projects => {
        this.listOfProjects = projects;
        // console.log(this.listOfProjects);

        for (let project of projects) {
          // console.log(project.title);
          this.elements.push({title: project.title, category: project.category, fieldOfStudy: project.fieldOfStudy, study: project.study,
            language: project.language});
        }

        // console.log(this.elements);
      });
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
