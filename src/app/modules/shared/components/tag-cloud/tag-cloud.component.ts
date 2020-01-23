import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../models/Tag/tag';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})
export class TagCloudComponent implements OnInit {
  @Input() tag: Tag;

  constructor() { }

  ngOnInit() {
  }

}
