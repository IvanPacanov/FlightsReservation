import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AIR_PORTS, Flight } from 'src/app/model/air-ports-model';
import { FlightsService } from 'src/app/services/flights.service';
import { SelectingDefaultFlightService } from 'src/app/services/selecting-default-flight.service';


const ELEMENT_DATA2: Flight[] = [
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'LUB')!.code}, data: new Date()},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: new Date()},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'LUB')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code}, data: new Date()},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: new Date()},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'LUB')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code}, data: new Date()},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: new Date()},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'LUB')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code}, data: new Date()},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: new Date()},
];

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['place', 'data', 'button'];
  public dataSource = ELEMENT_DATA2;
  clickedRows: Flight;
  destroySubject$ = new Subject<void>();
  public $data: Observable<Flight[]>;

  constructor(
    private selectingDefaultFlightService: SelectingDefaultFlightService,
    private flightsService: FlightsService)  { }

  ngOnInit(): void {
    this.$data =  this.flightsService.getFlights().pipe(
      takeUntil(this.destroySubject$));
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }


  selecte(value: Flight): void{
    this.clickedRows = value;
    this.selectingDefaultFlightService.selectFlight(value);
  }

}
