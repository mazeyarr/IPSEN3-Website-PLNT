import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

/**
 * @author Jesse Minneboo
 */
export class SearchbarComponent implements OnInit {
  @ViewChild('projectNameInput', {static: true}) projectNameInput: ElementRef; // search result
  listOfProjects: object[];

  constructor(private searchbarService: ProjectService) { }

  ngOnInit() {
  }

  /**
   * @author Jesse Minneboo
   * Receives all projects with a search result param
   */
  private onFindProjectWithProjectName() {
    this.searchbarService.fetchProjects(this.projectNameInput.nativeElement.value).subscribe(projects => {
      this.listOfProjects = projects;
      console.log(this.listOfProjects);
    });
  }

}
