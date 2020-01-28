import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../models/Tag/tag';
import {TagCloudService} from './tag-cloud.service';
import {TagCloudType} from "../../../project/types/tag-cloud-type";

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.css']
})

export class TagCloudComponent implements OnInit {
  tagsUsed: TagCloudType = [];

  constructor(private tagCloudService: TagCloudService) {
  }

  ngOnInit() {
    this.loadTagCloud();
  }

  loadTagCloud(): void {
    this.tagCloudService.getTagsLimit(4).subscribe(tagCloud => {
      for (const [key, value] of Object.entries(tagCloud)) {
        this.tagsUsed.push({
          name: key,
          amountUsed: value
        });
      }
    });
  }

}
