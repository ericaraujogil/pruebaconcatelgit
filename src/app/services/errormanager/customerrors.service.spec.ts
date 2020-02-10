import { TestBed } from '@angular/core/testing';

import { CustomerrorsService } from './customerrors.service';

describe('CustomerrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerrorsService = TestBed.get(CustomerrorsService);
    expect(service).toBeTruthy();
  });
});
