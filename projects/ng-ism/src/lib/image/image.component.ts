import { Component, OnInit, Input } from '@angular/core';


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
      this.bannerText = this.formatBannerText(this.deriveClassification(this.classification), this.controls);
    } else {
      this.classification = '!! CLASSIFICATION NOT SET !!';
    }
  }

  private deriveClassification = (classification: string) => {
    switch (classification) {
      case 'controlled':
        return 'CUI';
      case 'unclassified':
        return 'UNCLASSIFIED';
      case 'restricted':
        return 'RESTRICTED';
      case 'confidential':
        return 'CONFIDENTIAL';
      case 'secret':
        return 'SECRET';
      case 'topsecret':
        return 'TOP SECRET';
      case 'topsecretsci':
        return 'TOP SECRET//SCI';
      default:
        return classification;
    }
  }

  private formatBannerText(classification: string, controls: string[]) {
    const SEPARATOR = '//';

    return (controls.length > 0) ?
      `${classification}${SEPARATOR}${this.controls.join('/')}`.toUpperCase() :
      `${classification}`.toUpperCase();
  }
}
