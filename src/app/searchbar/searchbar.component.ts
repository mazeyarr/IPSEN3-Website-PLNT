import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @ViewChild('projectNameInput', {static: true}) projectNameInput: ElementRef;
  projects: object[];

  constructor() { }

  ngOnInit() {
  }

  private onFindProjectWithProjectName() {
    console.log(this.projectNameInput.nativeElement.value);
  }

}
