import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLineComponent } from './banner-line.component';

describe('BannerLineComponent', () => {
  let component: BannerLineComponent;
  let fixture: ComponentFixture<BannerLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerLineComponent);
    component = fixture.componentInstance;
    component.classification = 'UNCLASSIFIED';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect if classfication is NOT set by default', () => {
    fixture = TestBed.createComponent(BannerLineComponent);
    component = fixture.componentInstance;
    component.classification = '';
    fixture.detectChanges();
    expect(component.classification).toContain('!! CLASSIFICATION NOT SET !!');
  });

  it('should set banner text to UPPERCASE', () => {
    fixture = TestBed.createComponent(BannerLineComponent);
    component = fixture.componentInstance;
    component.classification = 'unclass';
    fixture.detectChanges();
    expect(component.bannerText).toContain(component.classification.toUpperCase());
  });

  it('should join classification and controls with (//) separator', () => {
    fixture = TestBed.createComponent(BannerLineComponent);
    component = fixture.componentInstance;
    component.classification = 'UNCLASSIFIED';
    component.controls = ['a', 'b', 'c'];
    fixture.detectChanges();

    const separator = '//';
    expect(component.bannerText).toContain(separator);
  });

  // it('should return UNCLASSIFIED classification color (green)', () => {
  //   const classificationLevel = 'UNCLASSIFIED';
  //   const color = component.classificationColor(classificationLevel);
  //   expect(color).toEqual('#27ae60');
  // });

  // it('should return CONFIDENTIAL classification color (blue)', () => {
  //   const classificationLevel = 'CONFIDENTIAL';
  //   const color = component.classificationColor(classificationLevel);
  //   expect(color).toEqual('#2980b9');
  // });

  // it('should return SECRET classification color (red)', () => {
  //   const classificationLevel = 'SECRET';
  //   const color = component.classificationColor(classificationLevel);
  //   expect(color).toEqual('#c0392b');
  // });

  // it('should return TOP_SECRET classification color (orange)', () => {
  //   const classificationLevel = 'TOP SECRET';
  //   const color = component.classificationColor(classificationLevel);
  //   expect(color).toEqual('#e67e22');
  // });

  // it('should return UNDEFINED classification color if level does not match', () => {
  //   const classificationLevel = 'FOO';
  //   const color = component.classificationColor(classificationLevel);
  //   expect(color).toEqual(undefined);
  // });
});
