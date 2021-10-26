import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight, FlightAdded } from 'src/app/model/flight-model';
import { ConfirmFlightService } from 'src/app/services/confirm-flight.service';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-basket-flights',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './basket-flights.component.html',
  styleUrls: ['./basket-flights.component.scss']
})
export class BasketFlightsComponent implements OnInit {

  public $data: Observable<FlightAdded[] | null>;
  public dataSource: FlightAdded[];
  displayedColumns: string[] = ['place',  'dataArrival', 'dataDeparture', 'button'];

  constructor(private confirmFlightService: ConfirmFlightService,
    private changeDetectorRef: ChangeDetectorRef )  { }

  ngOnInit(): void {
    this.$data =  this.confirmFlightService.actuallyFlights;
  }

  delete(flight: FlightAdded)
  {
    this.confirmFlightService.deleteFlight(flight);
    this.changeDetectorRef.detectChanges();
  }

}
