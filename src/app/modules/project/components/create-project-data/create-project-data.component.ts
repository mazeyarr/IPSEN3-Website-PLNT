import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IProject, Project} from '../../../../models/Project/project';
import {ProjectService} from '../../services/project.service';
import {Education, IInstitute} from '../../../../models/Education/education';

export interface CreateProjectData {
  createProjectParams: {
    title: string;
    language: string;
    grade: number;
    educationId: number;
    isExcellent: boolean;
  };
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

  educations: Education[] = [];
  institutes: IInstitute[] = [];

  availableEducations: Education[] = [];
  selectedInstitute: IInstitute = null;

  constructor(private projectService: ProjectService) {
    this.eFilesData = new EventEmitter<CreateProjectData[]>();
  }

  ngOnInit() {
    this.files = this.cachedFiles;
    this.createProjectData = this.cachedCreateProjectData;

    this.initEducations();
    this.initForms();
  }

  initEducations() {
    this.projectService.getEducationAll().subscribe(
      (educations: Education[]) => {
        this.educations = educations;

        educations.forEach(
          (education: Education) => {
            if (this.institutes.find(
              (institute: IInstitute) =>
                institute.id === education.institute.id) === undefined
            ) {
              this.institutes.push(education.institute);
            }
          }
        );
      }
    );
  }

  initForms() {
    this.files.forEach((file: File) => {
      this.createProjectData.push({
        createProjectParams: {
          title: file.name,
          language: '',
          grade: 0,
          educationId: null,
          isExcellent: false
        },
        file
      });
    });
  }

  selectInstituteBy(optionId: string) {
    const id = +optionId;

    if (id === null) {
      this.selectedInstitute = null;
    }
    this.selectedInstitute = this.institutes.find(
      (institute: IInstitute) => institute.id === id
    );

    this.setAvailableEducationsBy(id);

    console.log(this.availableEducations);
  }

  setAvailableEducationsBy(instituteId: number) {
    this.availableEducations = this.educations.filter(
      (education: Education) => education.institute.id === instituteId
    );
  }

  selectEducationBy(projectDataIndex: number, optionId: string) {
    const id = +optionId;

    if (id === null) {
      this.createProjectData[projectDataIndex].createProjectParams.educationId = null;
    }

    this.createProjectData[projectDataIndex].createProjectParams.educationId = id;
  }

  setExcellentTo(projectDataIndex: number) {
    const isExcellent: boolean = this.createProjectData[projectDataIndex].createProjectParams.isExcellent;

    this.createProjectData[projectDataIndex].createProjectParams.isExcellent = !isExcellent;
  }
}
