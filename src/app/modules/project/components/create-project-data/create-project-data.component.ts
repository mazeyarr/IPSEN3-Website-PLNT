import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CreateProjectData {
  title: string;
  file: File;
}

@Component({
  selector: 'app-create-project-data',
  templateUrl: './create-project-data.component.html',
  styleUrls: ['./create-project-data.component.css']
})
export class CreateProjectDataComponent implements OnInit {
  @Input() cachedFiles: File[];
  @Input() cachedCreateProjectData: CreateProjectData[];

  @Output() eFilesData: EventEmitter<CreateProjectData[]>;

  files: File[] = [];
  createProjectData: CreateProjectData[] = [];

  constructor() {
    this.eFilesData = new EventEmitter<CreateProjectData[]>();
  }

  ngOnInit() {
    this.files = this.cachedFiles;
    this.createProjectData = this.cachedCreateProjectData;

    this.initForms();
  }

  initForms() {
    this.files.forEach((file: File) => {
      this.createProjectData.push({
        title: file.name,
        file
      });
    });
  }
}
