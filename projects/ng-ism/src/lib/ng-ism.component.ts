import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-ism', 
  templateUrl: './ng-ism.component.html',
  styleUrls: ['./ng-ism.component.scss']
})
export class NgIsmComponent implements OnInit {
  @Input() text: string;
  @Input() classification: string;
  @Input() dissemination: string;
  public textCleared = true;
  public invalidClassification = false;

  private hitList = {
    U: ["R/", "C/", "S/", "TS/"],
    R: ["C/", "S/", "TS/"],
    C: ["S/", "TS/"],
    S: ["TS/"],
    TS: []
  };

  constructor() { }

  ngOnInit(): void {
    this.textCleared = this.checkText(this.text, this.classification);
  }

  checkText = (text, classification) => {
    let textCleared = true;
    if (!this.hitList[classification]) this.invalidClassification = true;
    this.hitList[classification].forEach(overclass => {
      if (text.includes(overclass)) {
        textCleared = false;
      }
    });
    return textCleared;
  }

  showText = () => {
    this.textCleared = true;
    this.invalidClassification = false;
  }

}
