import { TestBed } from '@angular/core/testing';

import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FizzbuzzService = TestBed.get(FizzbuzzService);
    expect(service).toBeTruthy();
  });
});
