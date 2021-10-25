import { TestBed } from '@angular/core/testing';

import { ConfirmFlightService } from './confirm-flight.service';

describe('ConfirmFlightService', () => {
  let service: ConfirmFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
