import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfirmFlightService } from 'src/app/services/confirm-flight.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  destroySubject$ = new Subject<void>();
  countOfFlight$: Observable<number>;

  constructor(
    private confirmFlightService: ConfirmFlightService) { }

  ngOnInit(): void {
    this.countOfFlight$ = this.confirmFlightService.currentCountOfFlight;
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
