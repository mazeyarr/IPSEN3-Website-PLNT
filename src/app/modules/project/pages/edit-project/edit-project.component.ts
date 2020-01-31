import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../../../../models/Project/project';
import { ProjectService } from '../../services/project.service';
import { Education, IEducation, IInstitute } from '../../../../models/Education/education';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit, OnDestroy {
  obvProject: Observable<Project>;
  project: Project = null;

  id: number;
  private sub: any;

  educations: Education[] = [];
  institutes: IInstitute[] = [];

  private selectedInstitute: IInstitute;
  private selectedEducation: IEducation;
  private availableEducations: Education[];

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;

      this.obvProject = new Observable<Project>();
    });

    this.projectService.getProjectBy(this.id).subscribe(
      (project: Project) => {
        this.project = project;
        this.selectedEducation = project.education;
        this.selectedInstitute = project.education.institute;

        this.initEducations();
      }
    );
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

        this.setAvailableEducations();
      }
    );
  }

  selectInstituteBy(instituteId: string) {
    const id: number = +instituteId;

    this.selectedInstitute = this.institutes.find((institute: IInstitute) => institute.id === id);

    this.setAvailableEducations();
  }

  setAvailableEducations() {
    this.availableEducations = this.educations.filter(
      (education: Education) => education.institute.id === this.selectedInstitute.id
    );
  }

  selectEducationBy(educationId: string) {
    const id: number = +educationId;

    this.selectedEducation = this.educations.find((education: Education) => education.id === id);
    this.selectedInstitute = this.selectedEducation.institute;

    this.project.education = this.selectedEducation;
  }

  onExcellentClick() {
    if (this.project.grade >= 8) {
      this.project.grade = 6;
    } else {
      this.project.grade = 8;
    }

    this.project.excellent = this.project.grade >= 8;
  }

  onClickBtnSave() {
    this.projectService.updateProject(this.project).subscribe(
      (updatedProject: Project) => {
        this.project = updatedProject;
        this.router.navigate(['project', updatedProject.id]);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
