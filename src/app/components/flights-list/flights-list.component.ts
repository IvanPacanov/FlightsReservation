import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AIR_PORTS, Flight } from 'src/app/model/flight-model';
import { FlightsService } from 'src/app/services/flights.service';
import { SelectingDefaultFlightService } from 'src/app/services/selecting-default-flight.service';

const ELEMENT_DATA2: Flight[] = [
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'LUB')!.code}, data: {arrive: new Date(), depart: new Date()}},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: {arrive: new Date(), depart: new Date()}},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'LUB')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code}, data: {arrive: new Date(), depart: new Date()}},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: {arrive: new Date(), depart: new Date()}},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'LUB')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code}, data: {arrive: new Date(), depart: new Date()}},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: {arrive: new Date(), depart: new Date()}},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'LUB')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'OSL')!.code}, data: {arrive: new Date(), depart: new Date()}},
  {place: {
    departure: AIR_PORTS.find(port => port.code === 'WAW')!.code,
    arrival: AIR_PORTS.find(port => port.code === 'HAM')!.code}, data: {arrive: new Date(), depart: new Date()}},
];

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss']
})
export class FlightsListComponent implements OnInit {

  public displayedColumns: string[] = ['place', 'data', 'button'];
  public clickedRows: Flight;
  public dataSource = ELEMENT_DATA2;
  public $data: Observable<Flight[]>;

  constructor(
    private selectingDefaultFlightService: SelectingDefaultFlightService,
    private flightsService: FlightsService)  { }

  ngOnInit(): void {
    this.$data =  this.flightsService.getFlights();
  }

  selecte(value: Flight): void{
    this.clickedRows = value;
    this.selectingDefaultFlightService.selectFlight(value);
  }
}
