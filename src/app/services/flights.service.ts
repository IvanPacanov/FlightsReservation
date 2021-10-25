import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AIR_PORTS, Flight } from '../model/air-ports-model';

const ELEMENT_DATA: Flight[] = [
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'LUB')!.code }, data: new Date() },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: new Date() },
  { place: { departure: AIR_PORTS.find(port => port.code === 'LUB')!.code, arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code }, data: new Date() },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: new Date() },
  { place: { departure: AIR_PORTS.find(port => port.code === 'LUB')!.code, arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code }, data: new Date() },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: new Date() },
  { place: { departure: AIR_PORTS.find(port => port.code === 'LUB')!.code, arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code }, data: new Date() },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: new Date() },
];
@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private mockData = new BehaviorSubject<Flight[]>(ELEMENT_DATA);
  constructor() { }

  getFlights(): Observable<Flight[]> {
    return this.mockData;
  }
}
