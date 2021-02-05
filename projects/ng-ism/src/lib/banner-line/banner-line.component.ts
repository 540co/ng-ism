import { Component, OnInit, Input } from '@angular/core';

export enum ClassificationLevel {
  topsecretsci = 'TOP SECRET//SCI',
  topsecret = 'TOP SECRET',
  secret = 'SECRET',
  restricted = 'RESTRICTED',
  controlled = 'CONTROLLED (CUI)',
  unclassified = 'UNCLASSIFIED',
  confidential = 'CONFIDENTIAL'
}

@Component({
  selector: 'ism-banner-line',
  templateUrl: './banner-line.component.html',
  styleUrls: ['./banner-line.component.scss']
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
      this.bannerText = this.formatBannerText(this.deriveClassification(this.classification), this.controls);
    } else {
      this.classification = '!! CLASSIFICATION NOT SET !!';
      this.classificationColor = '#FF69B4';
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
