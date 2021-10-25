import { TestBed } from '@angular/core/testing';
import { SelectingDefaultFlightService } from './selecting-default-flight.service';

describe('SelectingDefaultFlightService', () => {
  let service: SelectingDefaultFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectingDefaultFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
