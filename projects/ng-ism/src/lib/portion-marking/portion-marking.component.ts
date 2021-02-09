import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ism-portion-marking',
  templateUrl: './portion-marking.component.html',
  styleUrls: ['./portion-marking.component.scss'],
})
export class PortionMarkingComponent implements OnInit {
  @Input() text: string;
  @Input() classification: string;
  @Input() dissemination = '';
  @Input() warn = false;
  @Input() isDeclassified = false;
  @Input() tag = false;
  @Input() wrapped = true;
  public textCleared = true;
  public invalidClassification = false;
  public classificationShort = '';
  public disseminationParsed = '';

  private hitList = {
    U: ['R//', 'C//', 'S//', 'TS//'],
    R: ['C//', 'S//', 'TS//'],
    C: ['S//', 'TS//'],
    S: ['TS//'],
    TS: [],
    CUI: [],
    'TS//SCI': [],
  };

  constructor() {}

  ngOnInit(): void {
    this.textCleared = this.checkText(this.text, this.classification);
    this.classificationShort = this.deriveClassification(this.classification);
    this.disseminationParsed = this.parseDissemination(this.dissemination);
  }

  checkText = (text, classification) => {
    let textCleared = true;
    if (!this.hitList[classification]) {
      this.invalidClassification = true;
    } else {
      this.hitList[classification].forEach((overclass) => {
        if (text.includes(overclass)) {
          textCleared = false;
        }
      });
    }
    return textCleared;
  };

  showText = () => {
    this.textCleared = true;
    this.invalidClassification = false;
  };

  deriveClassification = (classification) => {
    switch (classification) {
      case 'U':
        return 'UNCLASSIFIED';
      case 'R':
        return 'RESTRICTED';
      case 'C':
        return 'CONFIDENTIAL';
      case 'S':
        return 'SECRET';
      case 'TS':
        return 'TOP SECRET';
      case 'TSSCI':
        return 'TOP SECRET//SCI';
      default:
        return classification;
    }
  };

  controlLookup = (control) => {
    if (control.includes('REL TO')) {
      return 'RELEASABLE TO ' + control.substring(7);
    } else {
      switch (control) {
        case 'FOUO':
          return 'FOR OFFICIAL USE ONLY';
        case 'RELIDO':
          return 'RELEASABLE BY INFORMATION DISCLOSURE OFFICIAL';
        case 'NF':
          return 'NOT RELEASABLE TO FOREIGN NATIONALS';
        case 'PROPIN':
          return 'PROPRIETARY INFORMATION INVOLVED';
        case 'IMCON':
          return 'CONTROLLED IMAGERY';
        default:
          return control;
      }
    }
  };

  parseDissemination = (dissemination) => {
    const controlArray = [];
    const breakClass = dissemination.split('//');
    breakClass.forEach((classification) => {
      const breakControl = classification.split('/');
      breakControl.forEach((control) => {
        controlArray.push(this.controlLookup(control));
      });
    });
    return controlArray[0] !== '' ? ' and is ' + controlArray.join(', ') : '';
  };
}
