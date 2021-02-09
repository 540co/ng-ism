import { Component, OnInit, Input } from '@angular/core';
import { deriveClassification, formatBannerText } from './../core/utils';

@Component({
  selector: 'ism-banner-line',
  templateUrl: './banner-line.component.html',
  styleUrls: ['./banner-line.component.scss'],
})
export class BannerLineComponent implements OnInit {
  @Input() classification: string;
  @Input() classificationColor?: string;
  @Input() controls?: string[] = [];
  @Input() fixedPosition: 'top' | 'bottom' | 'none' = 'none';
  @Input() height?: string;

  bannerText = '';
  classificationText = '';

  ngOnInit() {
    if (this.classification) {
      this.bannerText = formatBannerText(deriveClassification(this.classification), this.controls);
    } else {
      this.classification = '!! CLASSIFICATION NOT SET !!';
      this.classificationColor = '#FF69B4';
    }
  }
}
