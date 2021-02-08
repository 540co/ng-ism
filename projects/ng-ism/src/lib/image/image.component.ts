import { Component, OnInit, Input } from '@angular/core';
import { deriveClassification, formatBannerText } from './../core/utils';

@Component({
  selector: 'ism-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() src: string;
  @Input() position: ('centered' | 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'bottomCentered' | 'topCentered')[] = [];
  @Input() classification: string;
  @Input() controls?: string[] = [];

  bannerText = '';

  ngOnInit() {
    if (this.classification) {
      this.bannerText = formatBannerText(deriveClassification(this.classification), this.controls);
    } else {
      this.classification = '!! CLASSIFICATION NOT SET !!';
    }
  }
}
