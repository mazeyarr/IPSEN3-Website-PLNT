import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../models/Tag/tag';
import {TagCloudService} from './tag-cloud.service';
import {TagCloudType} from '../../../project/types/tag-cloud-type';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})

export class TagCloudComponent implements OnInit {
  // todo remove tagsUsed
  // tagsUsed: TagCloudType[] = [];
  tags = [];

  constructor(private tagCloudService: TagCloudService) {
  }

  ngOnInit() {
    this.getTagCloud();
  }

  getTagCloud(): void {
    this.tagCloudService.getTags().subscribe(tagCloud => {
      for (const [key, value] of Object.entries(tagCloud)) {
        this.tags.push(new Tag(key, value));
      }
      // todo remove tagsUsed
      // console.log(this.tagsUsed);
      console.log(this.tags);
      // this.loadTagCloud();
    });
  }

  // loadTagCloud(): void {
  // }

}
