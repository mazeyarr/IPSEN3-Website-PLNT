import {ChangeDetectorRef, Component, OnInit, ViewChild, HostListener, AfterViewInit} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  previous: any = [];
  headElements = ['title', 'category', 'field of study', 'study', 'language', 'likes'];

  constructor(private cdRef: ChangeDetectorRef) { }

  projectList: Array<any> = [
      { id: 1, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 2, title: 'test fafa', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 3, title: 'test dwadawd', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test dwada', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test dbgdg', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test vdxgesg', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test bfxhrd', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test bfxh', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test hrdh', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test gegsd', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test nfgjtfj', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test ggsrdg', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test hrdhdr', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test odwadject', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
      { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 1, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 2, title: 'test fafa', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 3, title: 'test dwadawd', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test dwada', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test dbgdg', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test vdxgesg', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test bfxhrd', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test bfxh', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test hrdh', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test gegsd', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test nfgjtfj', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test ggsrdg', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test hrdhdr', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test odwadject', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
    { id: 4, title: 'test project', category: '9+', fieldOfStudy: 'psygologie', study: 'HSLeiden', language: 'nederlands', likes: 12 },
  ];

  ngOnInit() {
    for (const project of this.projectList) {
      this.elements.push({title: project.title, category: project.category, fieldOfStudy: project.fieldOfStudy, study: project.study,
        language: project.language, likes: project.likes});
    }

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
