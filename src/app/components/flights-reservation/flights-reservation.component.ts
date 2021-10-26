import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { default as _rollupMoment } from 'moment';
import * as _moment from 'moment';
import { ConfirmFlightService } from 'src/app/services/confirm-flight.service';
import { SelectingDefaultFlightService } from 'src/app/services/selecting-default-flight.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Airport, AIR_PORTS, FlightAdded } from 'src/app/model/flight-model';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-flights-reservation',
  templateUrl: './flights-reservation.component.html',
  styleUrls: ['./flights-reservation.component.scss']
})
export class FlightsReservationComponent implements OnInit, OnDestroy {

  disableRegisterForm: boolean;
  registrationCompleted: boolean;
  destroySubject$ = new Subject<void>();

  flightReservation = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    numberPeople: ['', [Validators.required, Validators.min(1)]],
    class: ['', [Validators.required]],
    departTime: ['', [Validators.required]],
    arriveDate: ['', [Validators.required]],
    departPlace: ['', [Validators.required]],
    arrivePlace: ['', [Validators.required]]
  });

  places: Airport[] = AIR_PORTS;
  date = new FormControl(moment());
  constructor(
    private fb: FormBuilder,
    private confirmFlightService: ConfirmFlightService,
    private selectingDefaultFlightService: SelectingDefaultFlightService) { }

  ngOnInit(): void {
    this.selectingDefaultFlightService.currentSelectedFlight.pipe(
      takeUntil(this.destroySubject$)).subscribe(flight => {
        this.flightReservation.reset();
        this.flightReservation.patchValue({ departTime: flight.data.arrive });
        this.flightReservation.patchValue({ departPlace: flight.place.departure });
        this.flightReservation.patchValue({ arrivePlace: flight.place.arrival });
      });
  }

  isSelectedPlace(): boolean {
    if (this.flightReservation.get('arrivePlace')?.value || this.flightReservation.get('departPlace')?.value) {
      return true;
    }
    return false;
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  addFlight(): void {
    var flight: FlightAdded = {
        firstname: this.flightReservation.value.firstname,
        lastName: this.flightReservation.value.lastName,
        numberPeople: this.flightReservation.value.numberPeople,
        class: this.flightReservation.value.class,
      data: {
         arrive: this.flightReservation.value.arriveDate,
         depart: this.flightReservation.value.departTime,
        },
      place: {
        arrival: this.flightReservation.value.arrivePlace,
        departure: this.flightReservation.value.departPlace
      }
    };

    this.confirmFlightService.addNewFlight(flight);
    this.flightReservation.reset();
  }
}
