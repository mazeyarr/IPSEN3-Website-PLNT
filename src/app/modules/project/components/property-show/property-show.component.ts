import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-show',
  templateUrl: './property-show.component.html',
  styleUrls: ['./property-show.component.css']
})
export class PropertyShowComponent implements OnInit {
  @Input() label: string;
  @Input() value: string
  constructor() { }

  ngOnInit() {
  }

}
