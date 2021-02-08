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
});
