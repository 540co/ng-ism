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
    fixture = TestBed.createComponent(BannerLineComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect if classification is NOT set', () => {
    component.classification = '';
    fixture.detectChanges();

    expect(component.classification).toContain('!! CLASSIFICATION NOT SET !!');
    expect(component.classificationColor).toEqual('#FF69B4');
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

  it('should correctly render CUI classification', () => {
    const expectedBannerText = 'CUI';
    const bannerLine = fixture.debugElement.nativeElement.querySelector('.banner-line');

    component.classification = 'controlled';
    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedBannerText);
    expect(bannerLine.textContent).toEqual(expectedBannerText);
  });

  it('should correctly render UNCLASSIFIED classification', () => {
    const expectedBannerText = 'UNCLASSIFIED';
    const bannerLine = fixture.debugElement.nativeElement.querySelector('.banner-line');

    component.classification = 'unclassified';
    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedBannerText);
    expect(bannerLine.textContent).toEqual(expectedBannerText);
  });

  it('should correctly render RESTRICTED classification', () => {
    const expectedBannerText = 'RESTRICTED';
    const bannerLine = fixture.debugElement.nativeElement.querySelector('.banner-line');

    component.classification = 'restricted';
    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedBannerText);
    expect(bannerLine.textContent).toEqual(expectedBannerText);
  });

  it('should correctly render CONFIDENTIAL classification', () => {
    const expectedBannerText = 'CONFIDENTIAL';
    const bannerLine = fixture.debugElement.nativeElement.querySelector('.banner-line');

    component.classification = 'confidential';
    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedBannerText);
    expect(bannerLine.textContent).toEqual(expectedBannerText);
  });

  it('should correctly render SECRET classification', () => {
    const expectedBannerText = 'SECRET';
    const bannerLine = fixture.debugElement.nativeElement.querySelector('.banner-line');

    component.classification = 'secret';
    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedBannerText);
    expect(bannerLine.textContent).toEqual(expectedBannerText);
  });

  it('should correctly render TOP SECRET classification', () => {
    const expectedBannerText = 'TOP SECRET';
    const bannerLine = fixture.debugElement.nativeElement.querySelector('.banner-line');

    component.classification = 'topsecret';
    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedBannerText);
    expect(bannerLine.textContent).toEqual(expectedBannerText);
  });

  it('should correctly render TOP SECRET//SCI classification', () => {
    const expectedBannerText = 'TOP SECRET//SCI';
    const bannerLine = fixture.debugElement.nativeElement.querySelector('.banner-line');  

    component.classification = 'topsecretsci';
    fixture.detectChanges();

    expect(component.bannerText).toEqual(expectedBannerText);
    expect(bannerLine.textContent).toEqual(expectedBannerText);
  });

  it('should correctly set fixed position', () => {
    const expectedPosition = 'top';

    expect(component.fixedPosition).toEqual('none');

    component.fixedPosition = 'top';
    fixture.detectChanges();

    expect(component.fixedPosition).toEqual(expectedPosition);
  });
});
