import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
