import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Project} from '../../../../models/Project/project';
import { ProjectSimple } from '../../../../models/Project/project.simple';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() projectId: number;
  @Input() totalLikes: number;

  @Output() eLiked: EventEmitter<number>;

  constructor(private projectService: ProjectService) {
    this.eLiked = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  onBtnLikeClick() {
    this.eLiked.emit(this.projectId);
  }

}
