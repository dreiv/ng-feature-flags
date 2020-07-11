import { TestBed } from '@angular/core/testing';
import { PreloadingStrategy } from '@angular/router';

import { CustomPreloadingStrategy } from './preloading-strategy.service';

describe('CustomPreloadingStrategy', () => {
  let service: PreloadingStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadingStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
