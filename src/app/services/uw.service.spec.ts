import { TestBed } from '@angular/core/testing';

import { UwService } from './uw.service';

describe('UwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UwService = TestBed.get(UwService);
    expect(service).toBeTruthy();
  });
});
