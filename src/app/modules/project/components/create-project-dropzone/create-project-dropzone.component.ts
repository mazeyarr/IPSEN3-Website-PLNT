import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-project-dropzone',
  templateUrl: './create-project-dropzone.component.html',
  styleUrls: ['./create-project-dropzone.component.css']
})
export class CreateProjectDropzoneComponent implements OnInit {
  files: File[] = [];
  @Input() cachedFiles: File[];
  @Output() eFilesChange: EventEmitter<File[]>;

  constructor() {
    this.eFilesChange = new EventEmitter<File[]>();
  }

  ngOnInit() {
    this.files = this.cachedFiles;
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    this.eFilesChange.emit(this.files);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);

    this.eFilesChange.emit(this.files);
  }
}
