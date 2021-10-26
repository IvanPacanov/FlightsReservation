import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AIR_PORTS, Flight } from '../model/flight-model';

const ELEMENT_DATA: Flight[] = [
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'LUB')!.code }, data: {arrive: new Date(), depart: new Date()} },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: {arrive: new Date(), depart: new Date()} },
  { place: { departure: AIR_PORTS.find(port => port.code === 'LUB')!.code, arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code }, data: {arrive: new Date(), depart: new Date()} },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: {arrive: new Date(), depart: new Date()} },
  { place: { departure: AIR_PORTS.find(port => port.code === 'LUB')!.code, arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code }, data: {arrive: new Date(), depart: new Date()} },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: {arrive: new Date(), depart: new Date()} },
  { place: { departure: AIR_PORTS.find(port => port.code === 'LUB')!.code, arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code }, data: {arrive: new Date(), depart: new Date()} },
  { place: { departure: AIR_PORTS.find(port => port.code === 'WAW')!.code, arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code }, data: {arrive: new Date(), depart: new Date()} },
];
@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  getFlights(): Observable<Flight[]> {
    return of(ELEMENT_DATA);
  }
}
