import {Component, OnInit} from '@angular/core';
import {Tag} from '../../../../models/Tag/tag';
import {TagCloudService} from './tag-cloud.service';


@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})

export class TagCloudComponent implements OnInit {
  tags: Tag[] = [];
  colors: string[] = ['red', 'orange', 'blue', 'purple'];

  constructor(private tagCloudService: TagCloudService) {
  }

  ngOnInit() {
    this.getTagCloud();
  }

  getTagCloud(): void {
    this.tagCloudService.getTags().subscribe(tagCloud => {
      for (const [key, value] of Object.entries(tagCloud)) {
        this.tags.push(new Tag(key, value, this.getRandomColor()));
      }
      this.tags.sort( (a: Tag, b: Tag) => {
        return b.amount - a.amount;
      });
    });
  }

  getRandomColor = (): string  => {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
