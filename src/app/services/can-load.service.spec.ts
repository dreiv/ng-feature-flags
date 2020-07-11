import { TestBed } from '@angular/core/testing';

import { CanLoadFlag } from './can-load.service';

describe('CanLoadFlag', () => {
  let service: CanLoadFlag;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanLoadFlag);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
