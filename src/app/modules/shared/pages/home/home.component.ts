import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../../../app.route-animations';
import { ProjectService } from '../../../project/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ slideInAnimation ]
})
export class HomeComponent implements OnInit {
  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
  }

}
