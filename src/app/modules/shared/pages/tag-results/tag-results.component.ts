import { Component, OnInit } from '@angular/core';
import {TagService} from '../../components/tag/tag.service';

@Component({
  selector: 'app-tag-results',
  templateUrl: './tag-results.component.html',
  styleUrls: ['./tag-results.component.css']
})
export class TagResultsComponent implements OnInit {

  constructor(private tagService: TagService) { }

  ngOnInit() {
  }

}
