import { TestBed } from '@angular/core/testing';

import { BuServiceService } from './bu-service.service';

describe('BuServiceService', () => {
  let service: BuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
