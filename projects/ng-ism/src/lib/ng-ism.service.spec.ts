import { TestBed } from '@angular/core/testing';

import { NgIsmService } from './ng-ism.service';

describe('NgIsmService', () => {
  let service: NgIsmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIsmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
