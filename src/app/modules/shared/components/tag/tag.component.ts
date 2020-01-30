import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../models/Tag/tag';
import {animate, style, transition, trigger} from '@angular/animations';
import {TagService} from './tag.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  animations: [
    trigger(
      'fadeInOut',
      [
        transition(
          ':enter', [
            style({opacity: 0}),
            animate('700ms', style({opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({opacity: 1}),
            animate('500ms', style({opacity: 0}))
          ]
        )]
    )
  ],
})
export class TagComponent implements OnInit {
  @Input() tag: Tag;

  constructor(private tagService: TagService, private router: Router) {
  }

  ngOnInit() {
  }

  clickHandler() {
    this.tagService.setSearchResults(this.tagService.getProjectByTag(this.tag.name));
    this.tagService.setSearchQuery(this.tag.name);
    this.router.navigate(['tag-results']);
  }
}
