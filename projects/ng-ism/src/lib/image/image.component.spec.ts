import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect if classification is NOT set', () => {
    component.classification = '';

    fixture.detectChanges();

    expect(component.classification).toContain('!! CLASSIFICATION NOT SET !!');
  });

  it('should set banner text to UPPERCASE', () => {
    component.classification = 'unclassified';

    fixture.detectChanges();

    expect(component.bannerText).toContain(component.classification.toUpperCase());
  });

  it('should join classification and controls with (//) separator', () => {
    const SEPARATOR = '//';

    component.classification = 'UNCLASSIFIED';
    component.controls = ['a', 'b', 'c'];

    fixture.detectChanges();

    expect(component.bannerText).toContain(SEPARATOR);
  });

  it('should render classification text', () => {
    const expectedClassificationText = 'CUI';
    const classificationText = fixture.debugElement.nativeElement.querySelector('.classification-text');
    component.classification = 'controlled';

    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedClassificationText);
    expect(classificationText.textContent).toContain(expectedClassificationText);
  });

  it('should set the classification text position', () => {
    const expectedPosition = 'topCentered';
    const expectedPositionClass = 'top-centered';
    const classificationText = fixture.debugElement.nativeElement.querySelector('.classification-text');

    component.position = expectedPosition;

    fixture.detectChanges();

    expect(component.position).toEqual(expectedPosition);
    expect(classificationText.className).toContain(expectedPositionClass);
  });

  it('should set the image attributes', () => {
    const expectedSrc = 'image.png';
    const expectedAlt = 'exampleAlt';
    const img = fixture.debugElement.nativeElement.querySelector('.ism-image');

    component.src = expectedSrc;
    component.alt = expectedAlt;

    fixture.detectChanges();

    expect(component.src).toEqual(expectedSrc);
    expect(component.alt).toEqual(expectedAlt);
    expect(img.getAttribute('src')).toEqual(expectedSrc);
    expect(img.getAttribute('alt')).toEqual(expectedAlt);
  });
});
