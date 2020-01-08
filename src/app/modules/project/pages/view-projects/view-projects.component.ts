import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  @Input() searchResultFromSearchBar: string; // CHILD

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
