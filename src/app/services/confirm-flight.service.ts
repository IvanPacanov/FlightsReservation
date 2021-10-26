import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlightAdded } from '../model/flight-model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmFlightService {

  private flightsArray: FlightAdded[] = [];

  private flights = new BehaviorSubject(this.flightsArray);
  actuallyFlights = this.flights.asObservable();

  private countOfFlights = new BehaviorSubject(0);
  currentCountOfFlight = this.countOfFlights.asObservable();

  addNewFlight(flight: FlightAdded): void {
    this.flightsArray.push(flight);
    this.flights.next(this.flightsArray);
    this.countOfFlights.next(this.flightsArray.length);
  }

  deleteFlight(flight: FlightAdded) {
    var index = this.flightsArray.findIndex(f => f === flight);
    this.flightsArray.splice(index, 1);
    this.flights.next(this.flightsArray);
    this.countOfFlights.next(this.flightsArray.length);
  }

  resetFlight(): void {
    this.countOfFlights.next(0);
  }
}
