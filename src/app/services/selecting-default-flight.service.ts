import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Flight } from '../model/air-ports-model';

@Injectable({
  providedIn: 'root'
})
export class SelectingDefaultFlightService {

  private selectedFlight = new Subject<Flight>();
  currentSelectedFlight = this.selectedFlight.asObservable();

  selectFlight(value: Flight): void {
    this.selectedFlight.next(value);
  }
}
