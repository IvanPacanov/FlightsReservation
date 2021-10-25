import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from '../model/air-ports-model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmFlightService {

  private countOfFlights = new BehaviorSubject(0);
  currentCountOfFlight = this.countOfFlights.asObservable();


  private Flights = new BehaviorSubject<Array<Flight>>([]);
  currentFlight = this.countOfFlights.asObservable();

  constructor() { }

  addNewFlight(): void {
    this.countOfFlights.next(this.countOfFlights.value + 1);
  }

  addNewFlights(value: number): void {
    this.countOfFlights.next(this.countOfFlights.value + value);
  }

  resetFlight(): void {
    this.countOfFlights.next(0);
  }
}
