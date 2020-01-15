import { Component, OnInit } from '@angular/core';
import {Project} from '../../../../models/Project/project';
import {Router} from '@angular/router';
import {LikeService} from './like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  constructor(private likeService: LikeService, private router: Router) { }

  likeProject($id: number) {
    this.likeService.likeProjectById($id)
      .subscribe((project: Project[]) => {
        this.likeService.setLikeResults(project);
        this.router.navigateByUrl('/projects');
      });
  }

  ngOnInit() {
  }
}
