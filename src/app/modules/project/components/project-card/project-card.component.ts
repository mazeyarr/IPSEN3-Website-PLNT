import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../models/Project/project';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
    trigger(
      'cardZoom',
      [
        transition(
          ':enter', [
            style({ transform: 'scale(0)', opacity: 0 }),
            animate('500ms', style({ transform: 'scale(1)', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ transform: 'scale(1)', }),
            animate('500ms', style({ transform: 'scale(0)', opacity: 0 }))
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
