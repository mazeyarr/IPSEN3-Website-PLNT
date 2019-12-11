import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  @Input() searchResultFromSearchBar: string; // CHILD

  constructor() { }

  ngOnInit() {
  }

}
