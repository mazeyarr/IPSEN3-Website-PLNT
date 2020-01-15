import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  AfterViewInit, HostListener, Input, Output, EventEmitter,
} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import { Project } from '../../../../models/Project/project';
import { Observable } from 'rxjs';
import { LikeComponent } from '../like/like.component';
import {ProjectService} from '../../services/project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  @Input() obvProjects: Observable<Project[]>;
  @Input() likeComponent: LikeComponent;

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;

  projects: Project[] = [];

  tableHeaders = Project.tableHeadProperties();

  searchTextWithinResultSet: string;
  currentShowing: Project[] = [];
  previousShowing: Project[] = [];

  constructor(private cdRef: ChangeDetectorRef, private projectService: ProjectService) {
    this.searchTextWithinResultSet = '';
  }

  @HostListener('input') oninput() {
    this.searchResultSet();
  }

  ngOnInit() {
    this.initDataTable();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  initDataTable() {
    this.obvProjects.subscribe((projects: Project[]) => {
      this.projects = projects;

      this.mdbTable.setDataSource(this.projects);
      this.currentShowing = this.mdbTable.getDataSource();
      this.previousShowing = this.mdbTable.getDataSource();
    });
  }

  paginationCheck(rowIndex: number): boolean {
    const NEXT_ROW_INDEX = 1;

    return rowIndex + NEXT_ROW_INDEX
      >= this.mdbTablePagination.firstItemIndex
      && rowIndex < this.mdbTablePagination.lastItemIndex;
  }

  searchResultSet() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchTextWithinResultSet) {
      this.mdbTable.setDataSource(this.previousShowing);
      this.projects = this.mdbTable.getDataSource();
    }
    if (this.searchTextWithinResultSet) {
      this.projects = this.mdbTable.searchLocalDataBy(this.searchTextWithinResultSet);
      this.mdbTable.setDataSource(prev);
    }
  }

  onBtnLikeClick(projectId: number) {
    this.projectService.likeProjectById(projectId).subscribe((project: Project) => {
      const indexOfProject: number = this.projects.findIndex((mProject: Project) => mProject.id === project.id);
      this.projects[indexOfProject].hasLikes = project.hasLikes;
      this.projects[indexOfProject].hasTotalLikes = project.hasTotalLikes;
    });
  }
}
