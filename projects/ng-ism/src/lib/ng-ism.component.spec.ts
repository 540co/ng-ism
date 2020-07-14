import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIsmComponent } from './ng-ism.component';

describe('NgIsmComponent', () => {
  let component: NgIsmComponent;
  let fixture: ComponentFixture<NgIsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
