import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef) { }

  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  editField: string;
  projectList: Array<any> = [
      { id: 1, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 2, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 3, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
  ];

  elements: any = [];
  previous: any = [];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.projectList[id][property] = editField;
  }

  like(id: number) {
    alert('sorry, liken kan nog niet');
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}
