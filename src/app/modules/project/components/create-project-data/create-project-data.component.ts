import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IProject, Project} from '../../../../models/Project/project';
import {ProjectService} from '../../services/project.service';
import {Education, IInstitute} from '../../../../models/Education/education';

export interface ICreateProjectData {
  createProjectParams: {
    title: string;
    language: string;
    grade: number;
    educationId: number;
    isExcellent: boolean;
    validated: boolean;

    availableEducations: Education[];
    selectedInstitute: IInstitute;

    tagInput: string;
    tags: string[];
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
  @Input() cachedCreateProjectData: ICreateProjectData[];

  @Output() eFilesData: EventEmitter<ICreateProjectData[]>;

  files: File[] = [];
  createProjectData: ICreateProjectData[] = [];

  educations: Education[] = [];
  institutes: IInstitute[] = [];

  constructor(private projectService: ProjectService) {
    this.eFilesData = new EventEmitter<ICreateProjectData[]>();
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
          grade: null,
          educationId: null,
          isExcellent: false,
          validated: false,

          selectedInstitute: null,
          availableEducations: [],

          tagInput: '',
          tags: []
        },
        file
      });
    });
  }

  selectInstituteBy(projectDataIndex: number, optionId: string) {
    const id = +optionId;

    if (id === null) {
      this.createProjectData[projectDataIndex].createProjectParams.selectedInstitute = null;
    }
    this.createProjectData[projectDataIndex].createProjectParams.selectedInstitute = this.institutes.find(
      (institute: IInstitute) => institute.id === id
    );

    this.setAvailableEducationsBy(projectDataIndex, id);

    this.validateProjectData();
  }

  setAvailableEducationsBy(projectDataIndex: number, instituteId: number) {
    this.createProjectData[projectDataIndex].createProjectParams.availableEducations = this.educations.filter(
      (education: Education) => education.institute.id === instituteId
    );
  }

  selectEducationBy(projectDataIndex: number, optionId: string) {
    const id = +optionId;

    if (id === null) {
      this.createProjectData[projectDataIndex].createProjectParams.educationId = null;
    }

    this.createProjectData[projectDataIndex].createProjectParams.educationId = id;

    this.validateProjectData();
  }

  setExcellentTo(projectDataIndex: number) {
    const isExcellent: boolean = this.createProjectData[projectDataIndex].createProjectParams.isExcellent;

    this.createProjectData[projectDataIndex].createProjectParams.isExcellent = !isExcellent;

    if (this.createProjectData[projectDataIndex].createProjectParams.isExcellent) {
      this.createProjectData[projectDataIndex].createProjectParams.grade = 8;
    } else {
      this.createProjectData[projectDataIndex].createProjectParams.grade = 6;
    }

    this.validateProjectData();
  }

  addTags(projectDataIndex: number) {
    const tags: string[] = this.createProjectData[projectDataIndex].createProjectParams.tags;
    const input: string = this.createProjectData[projectDataIndex].createProjectParams.tagInput;

    if (input !== '' || input !== null) {
      if (tags.length < 5) {
        this.createProjectData[projectDataIndex].createProjectParams.tags = tags.concat(
          input.split(',')
        );

        this.createProjectData[projectDataIndex].createProjectParams.tagInput = '';
      }
    }

    this.validateProjectData();
  }

  removeTag(projectDataIndex: number, indexTag: number) {
    this.createProjectData[projectDataIndex].createProjectParams.tags.splice(indexTag, 1);

    this.validateProjectData();
  }

  validateProjectData() {
    this.createProjectData.forEach((projectData: ICreateProjectData) => {
      if (projectData.createProjectParams.title === '') {
        projectData.createProjectParams.validated = false;
        return;
      }

      if (projectData.createProjectParams.educationId === null) {
        projectData.createProjectParams.validated = false;
        return;
      }

      if (projectData.createProjectParams.language === '') {
        projectData.createProjectParams.validated = false;
        return;
      }

      if (projectData.createProjectParams.grade === null) {
        projectData.createProjectParams.validated = false;
        return;
      }

      projectData.createProjectParams.validated = true;
      this.eFilesData.emit(this.createProjectData);
    });
  }
}
