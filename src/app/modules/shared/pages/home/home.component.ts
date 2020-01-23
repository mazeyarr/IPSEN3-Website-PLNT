import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../../app.route-animations';
import { ProjectService } from '../../../project/services/project.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Project } from '../../../../models/Project/project';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProjectSimple } from '../../../../models/Project/project.simple';
import {TagCloudService} from '../../components/tag-cloud/tag-cloud.service';
import {Tag} from '../../../../models/Tag/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideInAnimation,
    trigger(
      'fadeInOut',
      [
        transition(
          ':enter', [
            style({  opacity: 0 }),
            animate('700ms', style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ opacity: 1 }),
            animate('500ms', style({ opacity: 0 }))
          ]
        )]
    )
  ]
})
export class HomeComponent implements OnInit {
  excellentProjects: ProjectSimple[] = [];
  tags: Tag[] = [];
  constructor(private authService: AuthService, private projectService: ProjectService, private tagCloudService: TagCloudService) {
  }

  ngOnInit(): void {
    this.projectService.getExcellentProjectsLimit(4).subscribe(
      (projects: ProjectSimple[]) => this.excellentProjects = projects
    );
    this.tagCloudService.getTagsLimit(4).subscribe(
      (tags: Tag[]) => this.tags = tags
    );
  }

  isExcellentProjectsEmpty = (): boolean => this.excellentProjects.length < 1;

}
