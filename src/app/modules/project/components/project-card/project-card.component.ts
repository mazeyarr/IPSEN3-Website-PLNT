import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../models/Project/project';
import { animate, style, transition, trigger } from '@angular/animations';
import { ProjectService } from '../../services/project.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
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
  ],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
