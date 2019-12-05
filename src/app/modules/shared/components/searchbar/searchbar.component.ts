import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SearchbarService} from './searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @ViewChild('projectNameInput', {static: true}) projectNameInput: ElementRef;
  listOfProjects: object[];

  constructor(private searchbarService: SearchbarService) { }

  ngOnInit() {
  }

  private onFindProjectWithProjectName() {
    this.searchbarService.fetchProjects(this.projectNameInput.nativeElement.value).subscribe(projects => {
      this.listOfProjects = projects;
      console.log(this.listOfProjects);
    });


  }

}
