import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { default as _rollupMoment } from 'moment';
import * as _moment from 'moment';
import { ConfirmFlightService } from 'src/app/services/confirm-flight.service';
import { SelectingDefaultFlightService } from 'src/app/services/selecting-default-flight.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Place, AIR_PORTS } from 'src/app/model/air-ports-model';

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
    numberPeople: ['', [Validators.required]],
    class: ['', [Validators.required]],
    departTime: ['', [Validators.required]],
    arriveDate: ['', [Validators.required]],
    departPlace: ['', [Validators.required]],
    arrivePlace: ['', [Validators.required]]
  });

  places: Place[] = AIR_PORTS;
  date = new FormControl(moment());
  constructor(
    private fb: FormBuilder,
    private confirmFlightService: ConfirmFlightService,
    private selectingDefaultFlightService: SelectingDefaultFlightService) { }


  ngOnInit(): void {
    this.selectingDefaultFlightService.currentSelectedFlight.pipe(
      takeUntil(this.destroySubject$)).subscribe(data => {
        this.flightReservation.reset();
        this.flightReservation.patchValue({ departTime: data.data});
        this.flightReservation.patchValue({ departPlace: AIR_PORTS.find(a => a.code === data.place.departure)?.code });
        this.flightReservation.patchValue({ arrivePlace: AIR_PORTS.find(a => a.code === data.place.arrival)?.code });
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
    this.confirmFlightService.addNewFlight();
    this.flightReservation.reset();
  }
}
